import axios from 'axios'

const UserAPI = {
  registerUser:(email, name, username)=>axios.post(`/api/users`),
  loginUser:(username, password)=> axios.post('/api/login')
}