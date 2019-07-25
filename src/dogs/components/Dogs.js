import React, { Component } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { getDogs } from '../api'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Layout from '../../shared/Layout'
import messages from '../messages'
import { withSnackbar } from 'notistack'

class Dogs extends Component {
  constructor (props) {
    super(props)

    this.state = {
      dogs: [],
      loaded: false,
      error: null
    }
  }

  // if component did mount
  async componentDidMount () {
    const { enqueueSnackbar } = this.props
    // api request
    // axios(`${apiUrl}/movies`)
    //   .then(res => this.setState({ movies: res.data.books, loaded: true }))
    //   .catch(err => this.setState({ error: err.message }))
    try {
      const response = await getDogs()
      this.setState({ dogs: response.data.dogs, loaded: true })
      enqueueSnackbar(messages.getDogsSuccess, { variant: 'success' })
    } catch (err) {
      this.setState({ error: err.message })
      enqueueSnackbar(messages.getDogsSuccess, { variant: 'error' })
    }
  }

  render () {
    const { dogs, error, loaded } = this.state
    const { user } = this.props

    const dogsList = dogs.map(dog => (
      <ListItem
        key={dog._id}
      >
        <Link
          component={RouterLink}
          to={`/dogs/${dog._id}`}
        >
          {!dog.name ? 'No Name!' : dog.name}
        </Link>
      </ListItem>
    ))

    if (!loaded) {
      return <p>Loading...</p>
    }
    if (dogs.length === 0) {
      return (
        <Layout
          md={8}
          lg={6}
        >
          <h3>
            Dogs {user && <Button href="#create-dog">Add a Dog</Button>}
          </h3>
          <p>No dogs to display</p>
        </Layout>
      )
    }

    if (error) {
      return <p>Error: {error}</p>
    }

    return (
      <Layout
        md={8}
        lg={6}
      >
        <h3>
          Dogs {user && <Button href="#create-dog">Add a Dog</Button>}
        </h3>
        <List>
          {dogsList}
        </List>
      </Layout>
    )
  }
}

export default withSnackbar(Dogs)
