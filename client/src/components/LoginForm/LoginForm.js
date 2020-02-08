import React, { useState, useContext } from 'react'
import { makeStyles, withTheme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import UserContext from '../../utils/UserContext'
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
  }, 
  myBtn: {
    marginLeft: 5,
    borderRadius: 7,
    marginTop: 20, 
    color: "white",
    backgroundColor: "transparent"
  }
}))

const LoginForm = () => {
  const { usersname, userPassword, handleInputChange, handleLogin } = useContext(UserContext)

  const classes = useStyles()
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className="landing">
     
      <Button className={classes.myBtn}  onClick={handleShow}>
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