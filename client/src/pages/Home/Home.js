
import React, { useState, useEffect, useContext } from 'react'
import Scrape from '../../pages/Scrape'
import Grid from '@material-ui/core/Grid'
import SimCard from '../../components/Card'
import JobCardAPI from '../../utils/JobCardAPI'
import JobCardContext from '../../utils/JobCardContext'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const { getAllJobs, updateJob } = JobCardAPI

const useStyles = makeStyles({
  title: {
    fontSize: 14,
    textAlign: 'center',
  },
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
  
      <>
        <div>
          <Grid container spacing={3} container padding='10px'>
            <Grid item xs={8}>
              <h3>*Placeholder text to indicate Homepage*</h3>
              <p>Display SimCard content here</p>
              <JobCardContext.Provider value={jobState}>
                <SimCard />
              </JobCardContext.Provider>

            </Grid>
            <Grid item xs={4}>
              <p>Placement for Scrape card </p>
              <Scrape />
            </Grid>
            <Grid item xs={12}>
              <div className={classes.title}>
                <p>Placement for Calendar overview</p>
                {/* <Calendar /> */}
              </div>
            </Grid>

          </Grid >
        </div >
      </>
  
  )
}

export default Home