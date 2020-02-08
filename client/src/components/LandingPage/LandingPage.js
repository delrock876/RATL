import React from 'react'
import { Parallax } from 'react-parallax'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar'
import TodayIcon from '@material-ui/icons/Today'
import LocationCityIcon from '@material-ui/icons/LocationCity'
import WorkIcon from '@material-ui/icons/Work'
import logo from './assets/RATL.png'
import profileB from './assets/bryant.jpeg'
import profileC from './assets/cyd.jpeg'
import profileS from './assets/sabrina.jpeg'
import Paper from '@material-ui/core/Paper'
import RegisterForm from '../RegisterForm'
import LoginForm from '../LoginForm'
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(theme => ({
  header: {
    margin: "auto",
    backgroundColor: "FFFFFF",
    width: "80%",
    textAlign: "center"
  },

  logo: {
    width: "60px",
    marginTop: 15,
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
    height: "240px",
    paddingTop: "10%",
    borderRadius: "3%",
    margin: 5,
    marginTop: 20

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
    fontFamily: 'Inder, sans-serif'
  },
  topHead: {
    backgroundColor: '#ffb84d'
  }

}));

const LandingPage = () => {
  const classes = useStyles();

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
                {/* < img src={logo} className={classes.logo} alt="logo" /> */}
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
              <h4 className={classes.title}> Meet the Team </h4>
            </Grid>

            <Grid item xs={6} align="center">
              < img className={classes.profile} src={profileB} alt="bryant" />
              <div >
                <a href="https://www.linkedin.com/in/bryant-nguyen-695b0219a/">
                  <h6> <LinkedInIcon /> Bryant</h6>
                  </a>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam ipsam sed sit blanditiis </p>
              </div>
            </Grid>

            <Grid item xs={6} align="center">
              < img className={classes.profile} src={profileC} alt="cyd" />
              <div >
                <a href="https://www.linkedin.com/in/cydcastillo">
                  <h6> <LinkedInIcon /> Cyd</h6>
                  </a>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam ipsam sed sit blanditiis </p>
              </div>
            </Grid>

            <Grid item xs={6} align="center">
              < img className={classes.profile} src={profileB} alt="javi" />
              <div >
                <a href="#">
                  <h6> <LinkedInIcon /> Francisco </h6>
                </a>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam ipsam sed sit blanditiis </p>
              </div>
            </Grid>

            <Grid item xs={6} align="center">
              
                < img className={classes.profile} src={profileS} alt="sabrina" />
                <div >  
          
                <a href="https://www.linkedin.com/in/sabrina-rocha/" target="_blank">
                  <h6> <LinkedInIcon /> Sabrina</h6>
              </a>
              
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam ipsam sed sit blanditiis </p>
                </div>
            </Grid>

          </Grid >
        </div >
      </>

    </div>
  )
}


export default LandingPage