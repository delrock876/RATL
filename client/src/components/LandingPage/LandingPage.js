import React from 'react'
import { Parallax, Background } from 'react-parallax'

import { makeStyles, Container } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar'
import TodayIcon from '@material-ui/icons/Today'
import LocationCityIcon from '@material-ui/icons/LocationCity'
import WorkIcon from '@material-ui/icons/Work'
import logo from './assets/RATL.png'
import profileB from './assets/bryant.jpeg'
import profileC from './assets/cyd.jpeg'
import profileS from './assets/sabrina.jpeg'




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
  profile: {
    padding: "10px",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    justifyContent: "center",
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    display: 'fixed',
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

}));

const LandingPage = () => {
  const classes = useStyles();
  return (

    <div className='mainBg'>
      <>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={12}>


              <div className={classes.header}>
                < img src={logo} alt="logo" />
                <h3>Your efficient job search management tool</h3>
                <p> RATL effectively helps manage your job search by providing tools to keep track of your application process, stay in touch with hiring managers and never loose a beat with an overview of key dates on your calendar such as upcoming interviews and networking events.  </p>
              </div>
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
          <Grid container spacing={3} container padding='10px'>
            <Grid item xs={6}>
              <div className={classes.paper}> <h4> Manage Connections </h4> <PermContactCalendarIcon />
                <p> Have key contact information readily on-hand so communication with hiring managers can be easily maintained</p></div>
            </Grid>
            <Grid item xs={6}>
              <div className={classes.paper}> <h4> Calendar View </h4>  <TodayIcon />
                <p> Stay ahead of the game - keep track of important dates like upcoming interviews,  follow-up calls and networking events </p></div>
            </Grid>
            <Grid item xs={6}>
              <div className={classes.paper}>  <h4> Job Leads </h4>   <WorkIcon />
                <p> Receive an overview of latest listings in your custom feed </p></div>>
            </Grid>
            <Grid item xs={6}>
              <div className={classes.paper}>  <h4> Company Insights </h4> <LocationCityIcon />
                <p> Be in-the-know and armed with relevant information about companies & organizations  </p></div>
            </Grid>


            <Grid item xs={12}>
              <div className={classes.paper}>  <h3> Meet the Team </h3></div>
            </Grid>

            <Grid item xs={3} align="center">
              < a href="https://www.linkedin.com/in/bryant-nguyen-695b0219a/">
                < img className={classes.profile} src={profileB} alt="bryant" />
                <div className={classes.paper}>  <h6> Bryant</h6>
                </div>
              </a>
            </Grid>

            <Grid item xs={3} align="center">
              <a href="https://www.linkedin.com/in/cydcastillo">
                < img className={classes.profile} src={profileC} alt="cyd" />
                <div className={classes.paper}>  <h6> Cyd</h6>
                </div>
              </a>
            </Grid>

            <Grid item xs={3} align="center">
              < img className={classes.profile} src={profileB} alt="javi" href="#" />
              <div className={classes.paper}>  <h6> Javi</h6>
              </div>
            </Grid>

            <Grid item xs={3} align="center">
              <a href="https://www.linkedin.com/in/sabrina-rocha/">
                < img className={classes.profile} src={profileS} alt="sabrina" />
                <div className={classes.paper}>  <h6> Sabrina</h6>
                </div>
              </a>
            </Grid>

          </Grid >
        </div >
      </>

    </div>
  )
}


export default LandingPage