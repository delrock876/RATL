import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import JobCardContext from '../../utils/JobCardContext'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Paper from '@material-ui/core/Paper'
// import Switch from '@material-ui/core/Switch'


const SimCard = () => {

  const { jobs } = useContext(JobCardContext)

  const useStyles = makeStyles({
    card: {
      width: "700px",
      minWidth: "322.76px",
      color: "#fbaa10"

    },
    marg: {
      margin: '16px',
      backgroundColor: "transparent"
        },
    title: {
      fontSize: 14,
      fontFamily: 'DM Sans, sans-serif',
    },
    pos: {
      marginBottom: 12,
      fontFamily: 'DM Sans, sans-serif',
    },
    simCard:{
      paddingTop: 50
    },
    compName: {
      fontFamily: 'DM Sans, sans-serif'
    },
    para2: {
      fontSize: "1em",
      color: "black",
      fontFamily: 'DM Sans, sans-serif'
  }
})

  const classes = useStyles()
  
  return (
    

    <div className={classes.simCard}>
  
      <List style={{ maxHeight: 400, overflow: 'auto' }}>
      {jobs.length ? jobs.map(job => (
        <ListItem>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Date Applied: {job.date}
            </Typography>
            <Typography variant="h5" component="h2" className={classes.compName}>
              {job.companyName}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {job.jobTitle}
            </Typography>
              <Typography variant="body2" component="p" className={classes.compName}>
              Status: 
             
              <br />

            </Typography>

          </CardContent>
          {/* <CardActions>
          
          </CardActions> */}
        </Card>
        </ListItem>
      )) : null
      }
      </List>
    </div>
  )
}

export default SimCard