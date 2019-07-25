import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { createDog } from '../api'
import DogForm from './DogForm.js'
import Layout from '../../shared/Layout'
import messages from '../messages'
import { withSnackbar } from 'notistack'

class DogCreate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      dog: {
        name: '',
        breed: ''
      },
      createdDogId: null,
      error: null
    }
  }

  handleChange = (event) => {
    // create an object with updated field
    const updatedField = {
      [event.target.name]: event.target.value
    }

    // use object to create updated state object. Assign takes two arguments: the object you want to compare and the data. Assign will then attempt to merge the two with a diff
    const editedDog = Object.assign(this.state.dog, updatedField)

    // finally setState with updates to Object
    this.setState({ dog: editedDog })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { enqueueSnackbar } = this.props

    createDog(this.state.dog, this.props.user)
      .then(response => this.setState({
        createdDogId: response.data.dog._id
      }))
      .then(() => enqueueSnackbar(messages.createDogSuccess, { variant: 'success' }))
      .catch(err => {
        this.setState({ error: err.message })
        enqueueSnackbar(messages.createDogFailure, { variant: 'error' })
      })
  }

  render () {
    const { handleChange, handleSubmit } = this
    const { dog, createdDogId, error } = this.state

    if (createdDogId) {
      return <Redirect to={
        { pathname: `/dogs/${createdDogId}`, state: { msg: 'Dog Successfully Created.' } }
      } />
    }

    if (error) {
      return <p>ERROR: {error}</p>
    }

    return (
      <Layout md={8} lg={6}>
        <h4>Create a new dog</h4>
        <DogForm
          dog={dog}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath="/dogs"
        />
      </Layout>
    )
  }
}

export default withSnackbar(withRouter(DogCreate))
