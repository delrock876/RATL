
import React, { useState, useEffect, useContext } from 'react'
import Scrape from '../../pages/Scrape'
import Grid from '@material-ui/core/Grid'
import SimCard from '../../components/Card'
import JobCardAPI from '../../utils/JobCardAPI'
import JobCardContext from '../../utils/JobCardContext'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import CalendarCard from '../../components/CalendarCard'
import GoogleAPI from '../../utils/GoogleAPI'
import CalendarAPI from '../../utils/CalendarAPI'


const { getAllJobs, updateJob } = JobCardAPI
const { getInfo, handleInputChange } = GoogleAPI

const useStyles = makeStyles({
 
  bg: {
    width: "100%",
    marginTop: 20,
  },
  para: {
    color: "#78b746",
    fontFamily: 'DM Sans, sans-serif',
    // backgroundColor: "#ffeb99",
    margin: "16px",
    align: "left",
    paddingLeft: "0px"
  },
  para2: {
    fontSize: "2em",
    color: "black",
    fontFamily: 'DM Sans, sans-serif'
  },
  marg:{
    margin: "16px",
    fontFamily: 'DM Sans, sans-serif',
    color: "#ffd11a"
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

  handleInputChange = () => {
    console.log('hello')
  }


  const classes = useStyles();

  return (

    <div className="homeBg">
      <Grid container spacing={1} padding='10px'>
        <div className={classes.bg}>
          <h3 className={classes.para}>Welcome back, {localStorage.getItem('name')}</h3>
          <hr/>
        </div>

          <button onclick ={handleInputChange}>
            Company
          </button>
       
        <Grid item xs={12}>
          <h4 className={classes.marg}>Upcoming Events</h4>
          <Paper className={classes.marg} elevation={4}>
          <CalendarCard />
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