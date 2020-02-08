import React, { useContext } from 'react'
import JobCardContext from '../../utils/JobCardContext'
import { makeStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ConnectionForm from '../ConnectionForm'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
})

const ConnectionDrawer = (props)=> {

  const { bottom, toggleDrawer } = useContext(JobCardContext)
  const classes = useStyles()
  
  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
    >
      <List>
        
          <ListItem>
          <ConnectionForm id = {props.jobId}/>
          </ListItem>
      
      </List>
    </div>
  );

  return (
    <div>
      <Button
      onClick={toggleDrawer(true)}
      variant="contained">+Add Connection</Button>
      
    
      <SwipeableDrawer
        anchor="bottom"
        open={bottom}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {fullList('bottom')}
      </SwipeableDrawer>
     
    </div>
  );
}
 export default ConnectionDrawer