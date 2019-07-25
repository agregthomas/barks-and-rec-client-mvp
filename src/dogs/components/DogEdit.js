import React, { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import { showDog, updateDog } from '../api.js'
import DogForm from './DogForm'
import Layout from '../../shared/Layout'
import messages from '../messages'
import { withSnackbar } from 'notistack'

class DogEdit extends Component {
  // Step 1: initialize constructor, state
  // Step 2: render function to display/return jsx
  // Step 2.a: reuse DogForm
  // Step 3: populate form - GET request
  // Step 3.a: update state from successful API response (use a lifecycle method to do this on load)
  // Step 4: handleChange, handleSubmit
  // Step 5: on submit - update state & handle redirect in render

  constructor (props) {
    super(props)

    this.state = {
      dog: {},
      edited: false,
      error: ''
    }
  }

  componentDidMount () {
    showDog(this.props.match.params.id)
      .then((response) => (
        this.setState({ dog: response.data.dog })
      ))
      .catch(err => this.setState({ error: err.stack }))
  }

  handleChange = (event) => {
    // create an object with updated field name and the updated value => { title: 'book title' }
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

    updateDog(this.state.dog, this.props.user)
      .then(response => this.setState({
        edited: true
      }))
      .then(() => enqueueSnackbar(messages.updateDogSuccess, { variant: 'success' }))
      .catch(err => {
        this.setState({ error: err.message })
        enqueueSnackbar(messages.updateDogFailure, { variant: 'error' })
      })
  }

  render () {
    const { handleChange, handleSubmit } = this
    const { dog, edited, error } = this.state
    const dogId = this.props.match.params.id

    if (edited) {
      return <Redirect to={
        { pathname: `/dogs/${this.props.match.params.id}`, state: { msg: 'Dog Successfully Updated.' } }
      } />
    }

    if (error) {
      return <p>ERROR: {error}</p>
    }

    return (
      <Layout md={8} lg={6}>
        <h4>Edit Dog</h4>
        <DogForm
          dog={dog}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath={'/dogs/' + dogId}
        />
      </Layout>
    )
  }
}

export default withSnackbar(withRouter(DogEdit))
