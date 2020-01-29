import axios from 'axios'

const UserAPI = {
  registerUser:(user)=> axios.post(`/api/users`, user),
  loginUser:(username, password)=> axios.post('/api/login')
}

export default UserAPI