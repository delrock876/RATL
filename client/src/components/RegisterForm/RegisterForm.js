import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import UserContext from '../../utils/UserContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import { red } from '@material-ui/core/colors'



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
    marginRight: 20,
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: "white",
    color: "#F4D03F"
  },
  outline: {
    backgroundColor: "#78b746",
    color: "white"
  },
  title: {
    fontFamily: 'DM Sans, sans-serif'
  },
  title2: {
    fontFamily: 'DM Sans, sans-serif',
    fontSize: "13px"
  },
  enter: {
    backgroundColor: "#78b746",
    color: "white"
  },
  error: {
    margin: 10,
    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'red',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'red',
      },
      '&.MuiFilledInput-underline': {
        borderColor: 'red'
      },

    }

  },
  helperText: {
    color: 'red'
  }
}))

const RegisterForm = () => {
  const { userFullName, usersname, userEmail, userPassword, handleInputChange, handleRegisterUser, formValid, userExists, helperText } = useContext(UserContext)

  const classes = useStyles()
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className="landing">
      <Button className={classes.myBtn} onClick={handleShow}>
        Register
      </Button>

      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header className={classes.outline} closeButton>


          <Modal.Title className={classes.title}>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Typography className={classes.title}>
            <Box textAlign="center" m={1}>
              Create your account. It's free and only takes a minute.
      </Box>
          </Typography>

          <br />
          <Box textAlign="center" className={classes.card}>
            <TextField
              onChange={handleInputChange}
              className={classes.pos}
              name="userFullName"
              value={userFullName}
              label="First Name"
              variant="outlined"></TextField>

            <TextField
              onChange={handleInputChange}
              className={(!formValid) ? classes.error : classes.pos}
              name="userEmail"
              value={userEmail}
              label="Email"
              variant="outlined"
              helperText={
                (!formValid) ? 'Please use a valid email' : ''
              }

            ></TextField>

            <TextField
              onChange={handleInputChange}
              className={(!formValid) ? classes.error : classes.pos}
              name="usersname"
              value={usersname}
              label="Username"
              variant="outlined"
              helperText={
                (!formValid) ? 'Must be at least 6 characters' : ''
              }></TextField>

            <TextField
              onChange={handleInputChange}
              className={(!formValid) ? classes.error : classes.pos}
              name="userPassword"
              type="password"
              value={userPassword}
              label="Password"
              placeholder="Create a password"
              variant="outlined"
              helperText={
                (!formValid) ? 'Must be at least 8 characters' : ''
              }></TextField>
          </Box>

          <Box
            textAlign="center"
            visibility={userExists ? 'visible' : 'hidden'}
            className={classes.helperText}>{helperText}
            </Box>

          <hr />
          <Typography className={classes.title2}>
            <Box textAlign="center" m={1}>
              By clicking the Register Account button you are agreeing to make your job hunt easier.
      </Box>
          </Typography>
        </Modal.Body>
        <Modal.Footer>
          <Button className={classes.enter} variant="contained" onClick={(event) => handleRegisterUser()}>
            Register Account
          </Button>

        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default RegisterForm
