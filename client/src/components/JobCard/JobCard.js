import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import DeleteIcon from '@material-ui/icons/Delete'
import ArchiveIcon from '@material-ui/icons/Archive'
import JobCardContext from '../../utils/JobCardContext'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import clsx from 'clsx'
import ConnectionForm from '../ConnectionForm'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Tooltip from '@material-ui/core/Tooltip'
import AddSkillForm from '../AddSkillForm'
import AddStatusForm from '../AddStatusForm'


const useStyles = makeStyles(theme => ({
  card: {
    margin: "auto",
    width: "95%",
    paddingBottom: 0,
    color: "#fbaa10",
    // fontFamily: 'DM Sans, sans-serif'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  title: {
    fontSize: 14,
    fontFamily: 'DM Sans, sans-serif'

  },
  pos: {
    marginBottom: 12,
    fontFamily: 'DM Sans, sans-serif'
  },
  button: {
    padding: "0px",
    width: "30px"
  },

  btnDelete: {
    color: '#D5441C',
    padding: "0px",
    width: "30px"
  },
  
  btnBox: {
    display: "flex",
    justifyContent: "flex-end"
  },
  chip: {
    color: "#78b746"
  },
  chip2: {
    color: "#fbaa10"
  },
  paper: {
    maxWidth: "200px",

  }
}))

const JobCard = () => {

  const { jobs, handleDeleteJob, handleArchiveJob, handleDeleteSkill } = useContext(JobCardContext)
  const classes = useStyles()

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }


  return (

    <div>
      <List>
        {
          jobs ? jobs.map(job => !job.archived ? (
            <ListItem>

              <Card className={classes.card} variant="outlined">

                <div className={classes.btnBox}>

                  <Tooltip title="Delete">
                    <Button
                      onClick={() => handleDeleteJob(job._id)}
                      className={classes.btnDelete}

                    ><DeleteIcon /></Button>
                  </Tooltip>

                  <Tooltip title="Archive">
                    <Button
                      onClick={() => handleArchiveJob(job._id, job.archived)}
                      className={classes.button}
                    ><ArchiveIcon /></Button>
                  </Tooltip>

                  <ConnectionForm jobId={job._id} />

                </div>

                <CardContent>
                  <Typography className={classes.title} color="textSecondary" gutterBottom >
                    {job.date}
                  </Typography>
                  <Typography variant="h5" className={classes.pos}>
                    {job.companyName}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {job.jobTitle}
                  </Typography>

                  <Typography variant="body2" className={classes.pos}>
                    Job Requirements:
                    <br />
                    {
                      job.skills ? job.skills.map(skill => (

                        <Chip
                          id="hi"
                          className={classes.chip}
                          variant="outlined"
                          size="small"
                          label={skill}
                          onDelete={(event) => handleDeleteSkill(job._id, skill)}
                        />
                      )) : null
                    }
                  </Typography>

                  <Typography variant="body2" className={classes.pos}>
                    <AddSkillForm jobId={job._id} />
                  </Typography>

                  <Typography variant="body2" className={classes.chip}>
                  <AddStatusForm jobId={job._id} />
                  </Typography>
                  <Typography variant="body2" className={classes.chip2}>
                    {job.status}
                 
                  </Typography>



                </CardContent>

                <CardActions disableSpacing>
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    {
                      job.connections ? job.connections.map(item =>

                        <Typography className={classes.pos}>
                          {item.type}: {item.name}
                          <br />
                          Phone: {item.phone}
                          <br />
                          Email: {item.email}
                        </Typography>

                      ) : null
                    }
                  </CardContent>
                </Collapse>
              </Card>
            </ListItem>
          ) : null) : null
        }
      </List>
    </div>
  )
}
export default JobCard