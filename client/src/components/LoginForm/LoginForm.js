import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import UserContext from '../../utils/UserContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal'
import { Redirect } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
  card: {
    maxWidth: 490,
  },
  pos: {
    margin: 10,
    // color: '#5ba016'
    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#5BA016',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#5BA016',
      },
      '&.MuiFilledInput-underline': {
        borderColor: '#5BA016',
      },
    },
    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#5BA016',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#5BA016',
      },
    },
    '& .MuiInputBase-input': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#5BA016',
      },
    },
  },
  myBtn: {
    marginLeft: 10,
    marginBottom: 15,
    borderRadius: 7,
    marginTop: 20,
    color: "white",
    backgroundColor: "transparent"
  },

}))

const LoginForm = () => {
  const { usersname, userPassword, handleInputChange, handleLogin, shouldRedirect, setRedirect } = useContext(UserContext)

  const classes = useStyles()
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return shouldRedirect ? <Redirect to='/home' /> && setRedirect(false): (
    <div className="landing">

      <Button className={classes.myBtn} onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className={classes.card}>

            <TextField
              onChange={handleInputChange}
              className={classes.pos}
              name="usersname"
              value={usersname}
              label="Username"
              variant="outlined"></TextField>

            <TextField
              type="password"
              onChange={handleInputChange}
              className={classes.pos}
              name="userPassword"
              value={userPassword}
              label="Password"
              placeholder="Create a password!"
              variant="outlined"></TextField>
          </form>

        </Modal.Body>
        <Modal.Footer>
            <Button variant="contained" onClick={handleLogin}>
              Enter
          </Button>

        </Modal.Footer>
      </Modal>
    </div>
  )


}

export default LoginForm