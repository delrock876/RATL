import React, {useContext} from 'react'
import UserContext from '../../utils/UserContext'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box'

const Navbar = () => {

  const {handleLogout} = useContext(UserContext)

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: 'black',
    }
  }))

  const classes = useStyles()

  return (
    <Box display={{ xs: 'none', sm: 'none', md: 'block' }} m={0} width="100%">

      <div className={classes.root}>
        <AppBar position="static" className={classes.root}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="black" aria-label="menu">
            </IconButton>
            <Typography variant="h6" className={classes.title}><Link to="/home">RATL</Link>
            </Typography>
            <Link to="/archived"><Button color="black">Archived</Button>
            </Link>
            <Link to="/jobs"><Button color="black">Jobs</Button>
            </Link>
            <Link to="/calendar"><Button color="black">Calendar</Button>
            </Link>
            {/* <Link to = "/"> */}
              <Button color="primary" onClick={handleLogout}>Log Out</Button>
              {/* </Link> */}
           
          </Toolbar>
        </AppBar>
      </div>
    </Box>
  )
}

export default Navbar

