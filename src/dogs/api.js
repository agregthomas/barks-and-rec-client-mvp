import apiUrl from '../apiConfig'
import axios from 'axios'

export const getDogs = () => {
  return axios({
    method: 'GET',
    url: apiUrl + '/dogs'
  })
}

export const showDog = (id) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/dogs/' + id
  })
}

export const createDog = (dog, user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/dogs',
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      dog: {
        name: dog.name,
        breed: dog.breed
      }
    }
  })
}

export const updateDog = (dog, user) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + '/dogs/' + dog._id,
    headers: {
      'Authorization': `Token token=${user.token}`
    },
    data: {
      dog: {
        name: dog.name,
        breed: dog.breed
      }
    }
  })
}

export const deleteDog = (id, user) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/dogs/' + id,
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}
