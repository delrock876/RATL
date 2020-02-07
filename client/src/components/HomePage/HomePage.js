import React from 'react'
import { makeStyles, Container } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';






const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: "FFFFFF",
    padding: "10px",
    textAlign: "center",
  },

  root: {
    flexGrow: 1,
  },


}));

const LandingPage = () => {
  const classes = useStyles();
  return (
      <>
      <div>
        <Grid container spacing={3}>

          <div className={classes.root}>
            <Grid container spacing={3} container padding='10px'>
              <Grid item xs={6} height="150px">
                <div className={classes.paper}> <h4> Manage Connections </h4> <PermContactCalendarIcon />
                  <p> Have key contact information readily on-hand so communication with hiring managers can be easily maintained</p></div>
              </Grid>
              <Grid item xs={6} height="150px">
                <div className={classes.paper}> <h4> Calendar View </h4>  <TodayIcon />
                  <p> Stay ahead of the game - keep track of important dates like upcoming interviews,  follow-up calls and networking events </p></div>
              </Grid>
              <Grid item xs={6} height="150px">
                <div className={classes.paper}>  <h4> Job Leads </h4>   <WorkIcon />
                  <p> Receive an overview of latest listings in your custom feed </p></div>>
            </Grid>
              <Grid item xs={6} height="150px">
                <div className={classes.paper}>  <h4> Company Insights </h4> <LocationCityIcon />
                  <p> Be in-the-know and armed with relevant information about companies & organizations  </p></div>
              </Grid>

            </Grid >
          </div >
      </>

        )
      }
      
      
export default HomePage