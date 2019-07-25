import React, { Component, Fragment } from 'react'
import { Link, Redirect, withRouter } from 'react-router-dom'
import { showDog, deleteDog } from '../api'
import Layout from '../../shared/Layout'
import Button from '@material-ui/core/Button'
import messages from '../messages'
import { withSnackbar } from 'notistack'

class Dog extends Component {
  constructor (props) {
    super(props)

    this.state = {
      dog: {},
      loaded: false,
      error: null,
      deleted: false
    }
  }

  async componentDidMount () {
    const { enqueueSnackbar } = this.props

    try {
      const response = await showDog(this.props.match.params.id)
      this.setState({
        dog: {
          ...response.data.dog
        },
        loaded: true })
      enqueueSnackbar(messages.getDogsSuccess, { variant: 'success' })
    } catch (err) {
      this.setState({ error: err.message })
      enqueueSnackbar(messages.getDogsSuccess, { variant: 'error' })
    }
  }

  delete = () => {
    const { user, enqueueSnackbar } = this.props

    deleteDog(this.props.match.params.id, user)
      .then(() => this.setState({ deleted: true }))
      .then(() => enqueueSnackbar(messages.deleteDogSuccess, { variant: 'success' }))
      .catch(err => {
        this.setState({ error: err.message })
        enqueueSnackbar(messages.deleteDogFailure, { variant: 'error' })
      })
  }

  render () {
    const { dog, error, deleted } = this.state
    const { user } = this.props

    const ownerButtons = (
      <Fragment>
        <Button onClick={this.delete}>Delete</Button>
        <Link to={`${dog._id}/edit`}>
          <Button>
            Edit
          </Button>
        </Link>
      </Fragment>
    )

    if (deleted) {
      return <Redirect to={
        { pathname: '/dogs' }
      } />
    }

    if (error) {
      return <p>ERROR: {error}</p>
    }

    if (dog === {}) {
      return <p>Loading...</p>
    }

    return (
      <Layout
        xs={12}
        sm={12}
        md={8}
        lg={6}
      >
        <h4>Name: {dog.name}</h4>
        <h3>Breed: {dog.breed}</h3>
        <Link to='/dogs'>Back to dogs Directory</Link>
        {user._id === dog.owner ? ownerButtons : ''}
      </Layout>
    )
  }
}

// withRouter allows us access to the path we specified in App.js. Since we're using render in App.js instead of just component={Book}, the Book component does not have access to props.match (since that comes from React Router component). This emulates having a router wrapping around the Book component.
export default withSnackbar(withRouter(Dog))
