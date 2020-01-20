import React from 'react';
import NavbarContext from '../../utils/NavbarContext'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const Navbar = () => {

  const classes = NavbarContext()

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
          <Button color="inherit">Archived</Button>
          <Button color="inherit">Jobs</Button>
          <Button color="inherit">Connections</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar

