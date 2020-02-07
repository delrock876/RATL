
import React, { useState, useEffect, useContext } from 'react'
import Scrape from '../../pages/Scrape'
import Grid from '@material-ui/core/Grid'
import SimCard from '../../components/Card'
import JobCardAPI from '../../utils/JobCardAPI'
import JobCardContext from '../../utils/JobCardContext'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'



const { getAllJobs, updateJob } = JobCardAPI

const useStyles = makeStyles({
  title: {
    fontSize: 14,
    textAlign: 'center',
    height: "150px"
  },
  bg: {
    backgroundColor:"#ccff99",
    width: "100%"
 
  }
});

const Home = () => {

  const [jobState, setJobState] = useState({
    jobs: []
  })
  useEffect(() => {
    getAllJobs(localStorage.getItem('userAuth'))
      .then(({ data: jobs }) => {
        console.log(jobs)
        setJobState({ ...jobState, jobs })
      })
      .catch(e => console.error(e))
  }, [])

  const classes = useStyles();
  return (

      <div className="homeBg">
        <Grid container spacing={1} padding='10px'>
        <div className={classes.bg}>
        <h2>Welcome, {localStorage.getItem('name')}</h2>
          </div>

        <Grid item xs={12}>
          <Paper elevation={4}>
          <div className={classes.title}>
            <h2>Place Calendar overview here</h2>
            {/* <Calendar /> */}
          </div>
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