import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import ArchiveIcon from '@material-ui/icons/Archive'
import HomeIcon from '@material-ui/icons/Home'
import WorkIcon from '@material-ui/icons/Work'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import Box from '@material-ui/core/Box'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
 
})

const BottomNav =()=>{
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (

    <Box display={{ xs: 'block', sm: 'block', md: 'none' }} m={0} bottom={0} position="fixed" width="100%" >
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
        <BottomNavigationAction label="Home" icon={<Link to="/home"><HomeIcon /></Link>} />
        <BottomNavigationAction label="Archives" icon={<Link to="archived"><ArchiveIcon /></Link>} />

        <BottomNavigationAction label="Jobs" icon={<Link to="/jobs"><WorkIcon /></Link>} />
        <BottomNavigationAction label="Calendar" icon={<Link to="/calendar"><PeopleAltIcon /></Link>} />
    </BottomNavigation>
    </Box>
  )
    }
  export default BottomNav