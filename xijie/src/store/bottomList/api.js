import axios from 'axios'

export const getBottomListSec = () => {
  return axios.get('http://localhost:4000/xijieBottomList')
}

