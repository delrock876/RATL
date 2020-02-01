import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { Link } from 'react-router-dom'
import Box from '@material-ui/core/Box'

const Navbar = () => {

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: '#98A87A',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: '#232A3C',
    }
  }))

  const classes = useStyles()

  return (
    <Box display={{ xs: 'none', sm: 'none', md: 'block' }} m={0} width="100%">

      <div className={classes.root}>
        <AppBar position="static" className={classes.root}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="primary" aria-label="menu">
            </IconButton>
            <Typography variant="h6" className={classes.title}><Link to="/home">RATLL</Link>
            </Typography>
            <Link to="/archived"><Button color="primary">Archived</Button>
            </Link>
            <Link to="/jobs"><Button color="primary">Jobs</Button>
            </Link>
            <Link to="/calendar"><Button color="primary">Calendar</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    </Box>
  )
}

export default Navbar

