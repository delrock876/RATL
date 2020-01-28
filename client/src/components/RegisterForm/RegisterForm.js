import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}))

const RegisterForm = () => {
  const classes = useStyles();
  // const [value, setValue] = React.useState('Controlled');

  return (
    <form className={classes.root} noValidate autoComplete="off">
      
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Full Name"
          // value={value}
          placeholder= "Create a username"
          // onChange={handleInputChange}
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Username"
          // value={value}
          placeholder= "Create a username"
          // onChange={handleInputChange}
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Email"
          // value={value}
          placeholder= "johndoe@email.com"
          // onChange={handleInputChange}
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Password"
          // value={value}
          placeholder= "Create a password"
          // onChange={handleInputChange}
          variant="outlined"
        />
        
        <Button variant= "contained" color= "secondary">Register!</Button>
       
      </div>
    </form>
  )
}

export default RegisterForm