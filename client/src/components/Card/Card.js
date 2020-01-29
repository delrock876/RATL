import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt'
import JobCardContext from '../../utils/JobCardContext'
import Switch from '@material-ui/core/Switch'


const SimCard = () => {

  const { jobs, handleSwitch } = useContext(JobCardContext)

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
    }
  })

  const classes = useStyles()
  
  return (

    <div>
      {jobs.length ? jobs.map(job => (
        
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              job date {job.date}
            </Typography>
            <Typography variant="h5" component="h2">
              {job.companyName}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {job.jobTitle}
            </Typography>
            <Typography variant="body2" component="p">
              Started interview process: 
              {/* <Switch onChange={() => handleSwitch(job._id, job.checked)} inputProps={{ 'aria-label': 'primary checkbox' }} /> */}
              <br />

            </Typography>

          </CardContent>
          <CardActions>
            
            <Button size="medium">
              <PeopleAltIcon></PeopleAltIcon>{job.contactName}
            </Button>
          </CardActions>
        </Card>
      )) : null
      }
    </div>
  )
}

export default SimCard