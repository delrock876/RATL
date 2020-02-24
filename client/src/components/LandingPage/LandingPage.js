import React from 'react'
import { Parallax } from 'react-parallax'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar'
import TodayIcon from '@material-ui/icons/Today'
import LocationCityIcon from '@material-ui/icons/LocationCity'
import WorkIcon from '@material-ui/icons/Work'
import logo from './assets/RATL_V6.png'
import profileB from './assets/bryant.jpeg'
import profileC from './assets/cyd.jpeg'
import profileS from './assets/sabrina.jpeg'
import profileF from './assets/javi.jpeg'
import Paper from '@material-ui/core/Paper'
import RegisterForm from '../RegisterForm'
import LoginForm from '../LoginForm'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const useStyles = makeStyles(theme => ({
  header: {
    margin: "auto",
    width: "80%",
    textAlign: "center"
  },
  logo: {
    marginTop: "15px",
    marginLeft: "10px"
  },
  profile: {
    height: "60px",
    borderRadius: "50%",
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: "center",
    backgroundColor: 'rgb(244, 255, 225)',
    height: "285px",
    paddingTop: "10%",
    borderRadius: "3%",
    margin: 5,
    marginTop: 20,
    padding: 15,
    fontFamily: 'DM Sans, sans-serif'
  },
  title: {
    marginTop: "6%",
    fontSize: "2em",
    color: "white",
    fontFamily: 'Inder, sans-serif',
    fontWeight: "bold",
    marginBottom: 20
  },
  para: {
    fontSize: "1.4em",
    color: "white",
    fontFamily: 'DM Sans, sans-serif'
  },
  para2: {
    fontSize: "1em",
    color: "black",
    fontFamily: 'DM Sans, sans-serif'
  },
  topHead: {
    backgroundColor: '#ffb84d'
  }
}))

const LandingPage = () => {
  const classes = useStyles()

  return (
    <div className='mainBg'>
      <>
        <Grid container className={classes.topHead}>
          <Grid item xs={4}>< img src={logo} className={classes.logo} alt="logo" /></Grid>
          <Grid item xs={8} container justify="flex-end" alignItems="flex-start" direcion="row">
            <LoginForm />
            <RegisterForm />
          </Grid>
        </Grid>
        <div>
          <Grid container spacing={3}>
            <Grid item xs={12}>

              <div className={classes.header}>
                <div >
                  <h3 className={classes.title}>Manage your job search in a simple yet effective fashion with RATL</h3>
                  <p className={classes.para}>
                    Job hunting doesn't have to be complicated. RATL simplifies your application process without compromising quality.
                  </p>
                </div>
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
            <div style={{ height: '450px', width: '100px' }} />
          </Parallax>
        </div>

        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={6} >
              <Paper elevation={4} className={classes.paper}>
                <div > <h4> Keep in Touch</h4> <PermContactCalendarIcon />
                  <p> Have key contact information readily on-hand so communication with hiring managers can be easily maintained</p></div>
              </Paper>
            </Grid>
            <Grid item xs={6} >
              <Paper elevation={4} className={classes.paper}>
                <div > <h4> Track Events </h4>  <TodayIcon />
                  <p> Stay ahead of the game - keep track of important dates like upcoming interviews,  follow-up calls and networking events </p>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={6} >
              <Paper elevation={4} className={classes.paper}>
                <div >  <h4> Discover Leads </h4>
                  <WorkIcon />
                  <p> Receive an overview of latest job listings in a custom feed based on your parameters</p>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={6} >
              <Paper elevation={4} className={classes.paper}>
                <div>  <h4> Be Prepared </h4> <LocationCityIcon />
                  <p> Be in-the-know and armed with relevant information about companies & organizations  </p>
                </div>
              </Paper>
            </Grid>


            <Grid item xs={12} align="center">
              <h className={classes.title}> Meet the Team </h>
            </Grid>

            <Grid item xs={6} align="center">
              < img className={classes.profile} src={profileB} alt="bryant" />
              <div >
                <a href="https://www.linkedin.com/in/bryant-nguyen-695b0219a/">
                  <h6> <LinkedInIcon /> Bryant</h6>
                </a>
                <p className={classes.para2}>I like long walks on the beach, candlelight dinners and Javascript is my jam. </p>
              </div>
            </Grid>

            <Grid item xs={6} align="center">
              < img className={classes.profile} src={profileC} alt="cyd" />
              <div >
                <a href="https://www.linkedin.com/in/cydcastillo">
                  <h6> <LinkedInIcon /> Cyd</h6>
                </a>
                <p className={classes.para2}>Aspiring digital nomad on a perpetual mission for enlightenment. </p>
              </div>
            </Grid>

            <Grid item xs={6} align="center">
              < img className={classes.profile} src={profileF} alt="francisco" />
              <div >
                <a href="https://www.linkedin.com/in/francisco-raigoza-2857a51a1/">
                  <h6> <LinkedInIcon /> Francisco </h6>
                </a>
                <p className={classes.para2}>Motivated developer and steward of new technologies on a mission to  better the lives of others </p>
              </div>
            </Grid>

            <Grid item xs={6} align="center">
              < img className={classes.profile} src={profileS} alt="sabrina" />
              <div >
                <a href="https://www.linkedin.com/in/sabrina-rocha/" >
                  <h6> <LinkedInIcon /> Sabrina</h6>
                </a>
                <p className={classes.para2}>I love coding most days. I'd say I love coding 292/365 days of the year. That's big.</p>
              </div>
            </Grid>

          </Grid >
        </div >
      </>

    </div>
  )
}
export default LandingPage