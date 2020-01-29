import React, {useState} from 'react'
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

const RegisterForm =()=> {
  const { userFullName, usersname, userEmail, userPassword, handleInputChange, handleRegisterUser } = useContext(UserContext)

  const classes = useStyles()
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const closeAndRegister =()=>{
    handleClose()
    handleRegisterUser()
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Register
      </Button>

      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Create an Account!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className={classes.card}>
            <TextField 
            className={classes.pos}
            name= "userFullName"
            value={userFullName}
            label= "Your Name" 
            variant="outlined"></TextField>

            <TextField 
            className={classes.pos}
            name="userEmail"
            value={userEmail}
            label= "Email" 
            variant="outlined"></TextField>

            <TextField 
            className={classes.pos}
            name="usersname"
            value= {usersname}
            label= "Username" 
            variant="outlined"></TextField>

            <TextField 
            className={classes.pos}
            name= "userPassword"
            value= {userPassword}
            label= "Password" 
            placeholder="Create a password!" 
            variant="outlined"></TextField>
          </form>
          
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeAndRegister}>
            Register Account!
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RegisterForm


// const RegisterForm = () => {
//   const {userFullName, usersname, userEmail, userPassword, handleInputChange, handleRegisterUser} = useContext(UserContext)
//   // const [value, setValue] = React.useState('Controlled');
//   const classes = useStyles()

//   return (
//     <Card className= {classes.card}>
//       <CardContent className= {classes.pos}>
//     <form className={classes.root} noValidate autoComplete="off" >
      
//         <TextField
//           id="outlined-multiline-flexible"
//           label="Full Name"
//           name="userFullName"
//           value={userFullName}
//           placeholder= "Create a username"
//           onChange={handleInputChange}
//           variant="outlined"
//         />
//         <TextField
//           id="outlined-multiline-flexible"
//           label="Username"
//           name= "usersname"
//           value={usersname}
//           placeholder= "Create a username"
//           onChange={handleInputChange}
//           variant="outlined"
//         />
//         <TextField
//           id="outlined-multiline-flexible"
//           label="Email"
//           name= "userEmail"
//           value={userEmail}
//           placeholder= "johndoe@email.com"
//           onChange={handleInputChange}
//           variant="outlined"
//         />
//         <TextField
//           id="outlined-multiline-flexible"
//           label="Password"
//           name= "userPassword"
//           value={userPassword}
//           placeholder= "Create a password"
//           onChange={handleInputChange}
//           variant="outlined"
//         />
//         <br/>
//         <Button onClick = {handleRegisterUser} variant= "contained" color= "secondary">Register!</Button>
       
//     </form>
//     </CardContent>
//     </Card>
//   )
// }

// export default RegisterForm