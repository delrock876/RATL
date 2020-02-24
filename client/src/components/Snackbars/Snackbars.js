import React, {useContext} from 'react'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'
import UserContext from '../../utils/UserContext'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}))

const Snackbars =()=> {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const { openSnack } = useContext(UserContext)

  const handleClick = () => {
    if(openSnack){}
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <Button variant="outlined" onClick={handleClick}>
        ex.
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Login information incorrect.
        </Alert>
      </Snackbar>
    </div>
  )
}
export default Snackbars