import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import UserContext from '../../utils/UserContext'

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}))

const LoginForm = () => {
  const { usersname, userPassword, handleInputChange, handleLogin } = useContext(UserContext)
  // const [value, setValue] = React.useState('Controlled');
  const classes = useStyles()

  return (
    <form className={classes.root} noValidate autoComplete="off">

      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="usersname"
          name="usersname"
          value={usersname}
          placeholder="Create a username"
          onChange={handleInputChange}
          variant="outlined"
        />

        <TextField
          id="outlined-multiline-flexible"
          label="Password"
          name="userPassword"
          value={userPassword}
          // placeholder="Enter password"
          onChange={handleInputChange}
          variant="outlined"
        />
        
        <Button onClick={handleLogin} variant="contained" color="secondary">Log In</Button>

      </div>
    </form>
  )
}

export default LoginForm