import { createContext } from 'react'

const UserContext = createContext({
  userFullName: String,
  userEmail: String,
  usersname: String,
  userPassword: String,
  shouldRedirect: false,
  helperText: String,
  formValid: Boolean,
  loginValid: Boolean,
  userExists: Boolean,
  openSnack: Boolean,
  setRedirect:()=>{ },
  handleInputChange: () => { },
  handleRegisterUser: () => { },
  handleLogin: () => { },
  handleLogout: () => { }
})

export default UserContext