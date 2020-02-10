import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import ArchiveIcon from '@material-ui/icons/Archive'
import HomeIcon from '@material-ui/icons/Home'
import WorkIcon from '@material-ui/icons/Work'
import TodayIcon from '@material-ui/icons/Today'
import Box from '@material-ui/core/Box'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  bg: {
 backgroundColor: "pink"
  },
  iconBtn :{
    color: "white"
  }
})

const BottomNav = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (

    <Box  display={{ xs: 'block', sm: 'block', md: 'none' }} m={0} bottom={0} position="fixed" width="100%" >
      <BottomNavigation
        className={classes.bg}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        // className={classes.root}
      >
        <BottomNavigationAction label="Home" color="secondary" icon={<Link to="/home"><HomeIcon className={classes.iconBtn}/></Link>} />
        <BottomNavigationAction label="Archives" color="secondary" icon={<Link to="archived"><ArchiveIcon className={classes.iconBtn} /></Link>} />

        <BottomNavigationAction label="Jobs" color="secondary" icon={<Link to="/jobs"><WorkIcon className={classes.iconBtn}/></Link>} />
        <BottomNavigationAction label="Calendar" color="secondary" icon={<Link to="/calendar"><TodayIcon className={classes.iconBtn} /></Link>} />
      </BottomNavigation>
    </Box>
  )
}
export default BottomNav