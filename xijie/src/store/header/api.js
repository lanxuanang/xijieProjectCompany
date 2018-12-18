import axios from 'axios'

export const getHeaderListsec = () => {
  return axios.get('http://localhost:4000/header')
}

