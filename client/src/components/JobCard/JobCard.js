import React, {useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import DeleteIcon from '@material-ui/icons/Delete'
import ArchiveIcon from '@material-ui/icons/Archive';
import JobCardContext from '../../utils/JobCardContext'

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
  
  const { jobs, handleDeleteJob, handleArchiveJob} = useContext(JobCardContext)
  const classes = useStyles()
  
  return (
    
    <div>
    {
      jobs.length ? jobs.map(job=>(

    <Card className={classes.card} variant="outlined">
        <Button
          onClick = {()=>handleDeleteJob(job._id)}
          variant="contained"
          className={classes.button}
          startIcon={<DeleteIcon />}
        >
          Delete
      </Button>
        <Button
          onClick= {()=> handleArchiveJob(job._id, job.archived)}
          variant="contained"
          className={classes.button}
          startIcon={<ArchiveIcon />}
        >
          Archive
      </Button>

      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         {job.date}
        </Typography>
        <Typography variant="h5" component="h2">
          {job.companyName}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {job.jobTitle}
        </Typography>


        <Typography variant="body2" component="p">
          Job Requirements: 
          <br />
          { 
            job.skills.length ? job.skills.map(skill => (
              <Chip color="primary" label={skill} variant="outlined" />
            )) : null
          }
        </Typography>
      
        <br/>
          
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
          {job.contactType}: {job.contactName}
          <br/>
          {job.contactPhone}
          <br />
          {job.contactEmail}
          <br />
        </Typography> */}
      
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    )): null
}
    </div>
  )
}
 export default JobCard