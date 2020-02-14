import { createContext } from 'react'

const UserContext = createContext({
  userFullName: String,
  userEmail: String,
  usersname: String,
  userPassword: String,
  handleInputChange: () => { },
  handleRegisterUser: () => { },
  handleLogin: () => { },
  handleLogout: () => { },
})

export default UserContext