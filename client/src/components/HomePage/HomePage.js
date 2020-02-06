import React from 'react'
import { makeStyles, Container } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SimCard from '../../components/Card'
import { Calendar } from 'react-big-calendar';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3} container padding='10px'>
          <Grid item xs={8}>
            <SimCard />
          </Grid>
          {/* <Grid item xs={4}>
            <Scrape />
          </Grid> */}
          {/* <Grid item xs={12}>
            <Calendar />
          </Grid> */}

        </Grid >
      </div >
    </>

  )
}


export default HomePage