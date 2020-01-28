import { createContext } from 'react'

const UserContext = createContext({
  name: String,
  email: String, 
  username: String,
  password: String,
  handleAddUser: ()=>{ },
  handleLogin: ()=>{ },
  handleLogout: ()=> { }
})

export default UserContext