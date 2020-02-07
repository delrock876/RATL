import React, { useContext } from 'react'
import UserContext from '../../utils/UserContext'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { NavLink } from 'react-router-dom'
import Box from '@material-ui/core/Box'

const Navbar = () => {

  const { handleLogout } = useContext(UserContext)

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
      color: 'red',
    }
  }))

  const classes = useStyles()

  return (
    <Box display={{ xs: 'none', sm: 'none', md: 'block' }} m={0} width="100%">

      <div className={classes.root}>
        <AppBar position="static" className={classes.root}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} aria-label="menu">
            </IconButton>
            <Typography variant="h4" className={classes.title}>
              <NavLink style={{ color: '#54A826', fontFamily: 'Inder, sans-serif' }} to="home">RATL</NavLink>
            </Typography>
            <NavLink to="/archived"><Button style={{ color: '#F9B353', fontFamily: 'Inder, sans-serif' }}><h6>Archived</h6></Button>
            </NavLink>
            <NavLink to="/jobs"><Button style={{ color: '#98A87A', fontFamily: 'Inder, sans-serif' }}><h6>Jobs</h6></Button>
            </NavLink>
            <NavLink to="/calendar"><Button style={{ color: '#000000', fontFamily: 'Inder, sans-serif' }}><h6>Calendar</h6></Button>
            </NavLink>
            {/* <Link to = "/"> */}
            <Button style={{ color: '#D5441C', fontFamily: 'Inder, sans-serif' }} onClick={handleLogout}><h6>Log Out</h6></Button>
            {/* </Link> */}

          </Toolbar>
        </AppBar>
      </div>
    </Box >
  )
}

export default Navbar

