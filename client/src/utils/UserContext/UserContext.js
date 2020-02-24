import { createContext } from 'react'

const UserContext = createContext({
  userFullName: String,
  userEmail: String,
  usersname: String,
  userPassword: String,
  shouldRedirect: false,
  errors: Object,
  formValid: Boolean,
  setRedirect:()=>{ },
  handleInputChange: () => { },
  handleRegisterUser: () => { },
  handleLogin: () => { },
  handleLogout: () => { }
})

export default UserContext