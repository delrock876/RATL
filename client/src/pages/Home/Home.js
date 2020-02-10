
import React, { useState, useEffect, useContext } from 'react'
import Scrape from '../../pages/Scrape'
import Grid from '@material-ui/core/Grid'
import SimCard from '../../components/Card'
import JobCardAPI from '../../utils/JobCardAPI'
import JobCardContext from '../../utils/JobCardContext'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import CalendarCard from '../../components/CalendarCard'


const { getAllJobs, updateJob } = JobCardAPI

const useStyles = makeStyles({
  title: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    fontSize: "2em",
    color: "white",
    fontFamily: 'Inder, sans-serif',
    fontWeight: "bold",
  },
  bg: {
    width: "100%",
    marginLeft: 20,
    marginTop: 20,
  },
  para: {
    fontSize: "1.4em",
    color: "black",
    fontFamily: 'DM Sans, sans-serif'
  },
  para2: {
    fontSize: "1em",
    color: "black",
    fontFamily: 'DM Sans, sans-serif'
  }
});

const Home = () => {

  const [jobState, setJobState] = useState({
    jobs: []
  })
  useEffect(() => {
    getAllJobs(localStorage.getItem('userAuth'))
      .then(({ data: jobs }) => {
        setJobState({ ...jobState, jobs })
      })
      .catch(e => console.error(e))
  }, [])

  const classes = useStyles();
  return (

    <div className="homeBg">
      <Grid container spacing={1} padding='10px'>
        <div className={classes.bg}>
          <h4 className={classes.para}>Welcome, {localStorage.getItem('name')}</h4>
        </div>

        <Grid item xs={12}>
          <Paper elevation={4}>
            <h4 className={classes.para2}>Place Calendar overview here</h4>
            {/* <Calendar /> */}
          </Paper>
        </Grid>

        <Grid item xs>

          <JobCardContext.Provider value={jobState}>
            <SimCard />
          </JobCardContext.Provider>

        </Grid>

        <Grid item xs>
          <Scrape />
        </Grid>


      </Grid >
    </div >


  )
}

export default Home