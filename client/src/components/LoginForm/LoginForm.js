import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import UserContext from '../../utils/UserContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal'
import { Redirect } from 'react-router-dom'
import Box from '@material-ui/core/Box'

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
    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#5BA016',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'light-grey',
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
  title:{
    fontFamily: 'DM Sans, sans-serif'
  },
  enter:{
    backgroundColor: "#78b746",
    color: "white"
  },
  outline:{
    backgroundColor: "#78b746",
    color: "white"
  },
  error:{
    color: 'red',
    fontFamily: 'DM Sans, sans-serif',
    margin: 0
  }
}))

const LoginForm = () => {
  const { usersname, userPassword, handleInputChange, handleLogin, shouldRedirect, loginValid } = useContext(UserContext)
  const classes = useStyles()
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return shouldRedirect ? <Redirect to='/home' /> : (
    <div className="landing">
      <Button className={classes.myBtn} onClick={handleShow}>
        Login
      </Button>
     
      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header className= {classes.outline}closeButton>
          <Modal.Title className={classes.title}>Login</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Box textAlign="center"className={classes.card}>
            <TextField
              onChange={handleInputChange}
              className={classes.pos}
              name="usersname"
              value={usersname}
              label="Username"
              variant="outlined"
              placeholder="Enter Username"></TextField>

            <TextField
              type="password"
              onChange={handleInputChange}
              className={classes.pos}
              name="userPassword"
              value={userPassword}
              label="Password"
              placeholder="Enter Password"
              variant="outlined"></TextField>
              <Box
              // IF THE LOGIN INFO IS INVALID, SHOW THIS ERROR MSG
              visibility= {(!loginValid)? 'visible': 'hidden'}
              className={classes.error}>Not valid password/username combo</Box>
          </Box>
        </Modal.Body>

        <Modal.Footer>
            <Button className={classes.enter}variant="contained" onClick={handleLogin}>
              Enter
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )


}

export default LoginForm