import React from 'react'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const DogForm = ({ dog, handleSubmit, handleChange, cancelPath }) => {
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="name"
        label="Name"
        name="name"
        value={dog.name || ''}
        onChange={handleChange}
        margin="normal"
        InputLabelProps={
          { shrink: true }
        }
      />
      <TextField
        id="breed"
        label="Breed"
        name="breed"
        value={dog.breed || ''}
        onChange={handleChange}
        margin="normal"
        InputLabelProps={
          { shrink: true }
        }
      />

      <Button type="submit">
        Submit
      </Button>

      <Link to={cancelPath}>
        <button>Cancel</button>
      </Link>
    </form>
  )
}

export default DogForm
