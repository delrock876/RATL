import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import UserContext from '../../utils/UserContext'
import { useContext } from 'react'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal'


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
    margin: 10
  }
}))

const RegisterForm = () => {
  const { userFullName, usersname, userEmail, userPassword, handleInputChange, handleRegisterUser } = useContext(UserContext)

  const classes = useStyles()
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button variant="contained" onClick={handleShow}>
        Register
      </Button>

      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Create an Account!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className={classes.card}>
            <TextField
              onChange={handleInputChange}
              className={classes.pos}
              name="userFullName"
              value={userFullName}
              label="Your Name"
              variant="outlined"></TextField>

            <TextField
              onChange={handleInputChange}
              className={classes.pos}
              name="userEmail"
              value={userEmail}
              label="Email"
              variant="outlined"></TextField>

            <TextField
              onChange={handleInputChange}
              className={classes.pos}
              name="usersname"
              value={usersname}
              label="Username"
              variant="outlined"></TextField>

            <TextField
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
          <Button variant="contained" onClick={handleRegisterUser}>
            Register Account!
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  )
}

export default RegisterForm
      