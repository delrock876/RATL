import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import UserContext from '../../utils/UserContext'
import swal from "sweetalert"
import { useContext } from 'react'

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}))

const RegisterForm = () => {
  const {userFullName, usersname, userEmail, userPassword, handleInputChange, handleRegisterUser} = useContext(UserContext)
  // const [value, setValue] = React.useState('Controlled');
  const classes = useStyles()

  return (
    <form className={classes.root} noValidate autoComplete="off">
      
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Full Name"
          name="userFullName"
          value={userFullName}
          placeholder= "Create a username"
          onChange={handleInputChange}
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Username"
          name= "usersname"
          value={usersname}
          placeholder= "Create a username"
          onChange={handleInputChange}
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Email"
          name= "userEmail"
          value={userEmail}
          placeholder= "johndoe@email.com"
          onChange={handleInputChange}
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Password"
          name= "userPassword"
          value={userPassword}
          placeholder= "Create a password"
          onChange={handleInputChange}
          variant="outlined"
        />
        
        <Button onClick = {handleRegisterUser} variant= "contained" color= "secondary">Register!</Button>
       
      </div>
    </form>
  )
}

export default RegisterForm