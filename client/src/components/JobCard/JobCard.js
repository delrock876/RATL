import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

const JobCard =()=> {
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          [DATE APPLIED]
        </Typography>
        <Typography variant="h5" component="h2">
          [FAKE COMPANY NAME]
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          [JOBTITLE]
        </Typography>


        <Typography variant="body2" component="p">
          Job Requirements: 
          <br />
          <Chip color= "primary" label="Javascript" variant="outlined" />
          <Chip color="primary" label="MongoDb" variant="outlined" />
        </Typography>
      
        <br/>

        <Typography className={classes.title} color="textSecondary" gutterBottom>
          [CONNECTION POSITION]: [CONNECTION NAME]
          <br/>
          [CONNECTION PHONE]
          <br />
          [CONNECTION EMAIL]
          <br />
        </Typography>
      
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}
 export default JobCard