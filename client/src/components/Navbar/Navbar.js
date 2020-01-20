import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import {Link} from 'react-router-dom'


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
    },
    ButtonAppBar:()=>{}
  }))

  
    const classes = useStyles()
     
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              RATL
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
    )
  }

  export default Navbar

