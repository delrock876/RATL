import React, { useContext } from 'react'
import JobCardContext from '../../utils/JobCardContext'
import { makeStyles } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import JobForm from '../../components/JobForm'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  myBtn: {
    marginLeft: 20,
    marginTop: 20,
    color:" #78b746",
    backgroundColor: "transparent",
    padding: 0
  }
})
// SWIPEABLE FORM ON JOBS PAGE THAT CONTAINS JOBFORM TO MANUALLY ADD JOBS
const JobDrawer = ()=> {
  const { bottom, toggleDrawer } = useContext(JobCardContext)
  const classes = useStyles()
  
  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
    >
      <List>
          <ListItem>
          <JobForm/>
          </ListItem>
      </List>
    </div>
  )

  return (
    <div>
      <Button className={classes.myBtn} onClick={toggleDrawer(true)}>Add Job</Button>
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
 export default JobDrawer