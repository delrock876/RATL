import axios from 'axios'

const UserAPI = {
  registerUser:(user)=> axios.post(`/api/users`, user),
  loginUser:(user)=> axios.post('/api/login', user)
}

export default UserAPI