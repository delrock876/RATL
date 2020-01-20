import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import {Link} from 'react-router-dom'
import Box from '@material-ui/core/Box'


const Navbar = () => {

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    }
  }))

  
    const classes = useStyles()
     
    return (
      <Box display={{ xs: 'none', md: 'block' }} m={0}>
      
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            </IconButton>
            <Typography variant="h6" className={classes.title}><Link to = "/">Ratl</Link>
          </Typography>
            <Link to = "/archived"><Button color="inherit">Archived</Button>
            </Link>
            <Link to = "/jobs"><Button color="inherit">Jobs</Button>
            </Link>
            <Link to = "/connections"><Button color="inherit">Connections</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
      </Box>
    )
  }

  export default Navbar

