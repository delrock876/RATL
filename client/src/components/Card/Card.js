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
    simCard: {
      paddingBottom: 30
    },
    compName: {
      fontFamily: 'DM Sans, sans-serif',
      '& label.Mui-focused': {
        color: 'black',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#5BA016',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white',
        },
        '&:hover fieldset': {
          borderColor: 'black',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#5BA016',
        },
        '&.MuiFilledInput-underline': {
          borderColor: '#5BA016',
        },
      },
      '& label.Mui-focused': {
        color: 'black',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#5BA016',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white',
        },
        '&:hover fieldset': {
          borderColor: 'black',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#5BA016',
        },
      },
      '& .MuiInputBase-input': {
        '& fieldset': {
          borderColor: 'white',
        },
        '&:hover fieldset': {
          borderColor: 'black',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#5BA016',
        },
      },
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

      <List style={{ maxHeight: 700, overflow: 'auto' }}>
        {
        jobs ? jobs.map(job =>  !job.archived ? (
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
                  Status: {job.status}

                  <br />

                </Typography>

              </CardContent>

            </Card>
          </ListItem>
        ) : null) : null
        }
      </List>
    </div>
  )
}

export default SimCard