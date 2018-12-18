import axios from 'axios'

export const getBottomList = () => {
  return axios.get('http://localhost:4000/xijieBottomList')
}

