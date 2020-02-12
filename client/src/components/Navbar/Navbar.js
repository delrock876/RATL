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
import logo from './assets/RATL_V6.png'

const Navbar = () => {

  const { handleLogout } = useContext(UserContext)

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: '#fbaa10',
      boxShadow: 'none',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    // logo: {
    //   flexGrow: 1,
    //   marginTop: "15px",
    //   marginLeft: "10px"
    // },
  }))

  const classes = useStyles()

  return (
    <Box display={{ xs: 'none', sm: 'none', md: 'block' }} m={0} width="100%">

      <div className={classes.root}>
        <AppBar position="static" className={classes.root}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} aria-label="menu">
            </IconButton>
            <Typography className={classes.title}>
              <NavLink to="home">< img src={logo} alt="logo" /></NavLink>
            </Typography>

            <NavLink style={{ textDecoration: 'none' }} to="/archived"><Button style={{ color: '#54a826', fontFamily: 'Inder, sans-serif' }}><h6>Archived</h6></Button>
            </NavLink>
            <NavLink style={{ textDecoration: 'none' }} to="/jobs"><Button style={{ color: '#98A87A', fontFamily: 'Inder, sans-serif' }}><h6>Jobs</h6></Button>
            </NavLink>
            <NavLink style={{ textDecoration: 'none' }} to="/calendar"><Button style={{ color: '#000000', fontFamily: 'Inder, sans-serif' }}><h6>Calendar</h6></Button>
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

