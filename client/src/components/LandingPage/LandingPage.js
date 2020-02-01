import React from 'react'
import { Parallax, Background } from 'react-parallax'
import { makeStyles, Container } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar'
import TodayIcon from '@material-ui/icons/Today'
import LocationCityIcon from '@material-ui/icons/LocationCity'
import WorkIcon from '@material-ui/icons/Work'
import logo from './assets/RATL_4.png'


const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: "FFFFFF",
    padding: "10px",
    textAlign: "center",
  },

  logo: {
    padding: "10px",
    textAlign: "center",
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  return (
    <div className="landing">
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12}>

            <Paper elevation={0} className={classes.header}>
              < img src={logo} alt="logo" />
              <h3>Your efficient job search management tool</h3>

              <p> RATL effectively helps manage your job search by providing tools to keep track of your application process, stay in touch with hiring managers and never loose a beat with an overview of key dates on your calendar such as upcoming interviews and networking events.  </p>
            </Paper>
          </Grid>

        </Grid>
      </div>

      <div>
        <Parallax
          blur={0}
          bgImage={require('./assets/Snake-Vector-Illustration.jpg')}
          bgImageAlt="group"
          strength={200}
        >
          <div style={{ height: '400px' }} />
        </Parallax>
      </div>

      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper elevation={0} className={classes.paper}> <h4> Manage Connections </h4> <PermContactCalendarIcon />
              <p> Have key contact information readily on-hand so communication with hiring managers can be easily maintained</p></Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={0} className={classes.paper}> <h4> Calendar View </h4>  <TodayIcon />
              <p> Stay ahead of the game - keep track of important dates like upcoming interviews,  follow-up calls and networking events </p></Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={0} className={classes.paper}>  <h4> Job Leads </h4>   <WorkIcon />
              <p> Receive an overview of latest listings in your custom feed </p></Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={0} className={classes.paper}>  <h4> Company Insights </h4> <LocationCityIcon />
              <p> Be in-the-know and armed with relevant information about companies & organizations  </p></Paper>
          </Grid>

        </Grid>
      </div >
      <div>
        <Parallax
          blur={0}
          bgImage={require('./assets/female-looking-at-laptop.jpg')}
          bgImageAlt="group"
          strength={400}
        >
          <div style={{ height: '450px' }} />
        </Parallax>
      </div>

    </div>
  )
}


export default LandingPage