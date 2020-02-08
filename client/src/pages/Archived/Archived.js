import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import ArchiveTable from '../../components/ArchiveTable'
import JobCardAPI from "../../utils/JobCardAPI"
import JobCardContext from '../../utils/JobCardContext'

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
  para: {
    fontSize: "1.4em",
    color: "white",
    fontFamily: 'DM Sans, sans-serif'
  },
  para2: {
    fontSize: "1em",
    color: "black",
    fontFamily: 'DM Sans, sans-serif'
  }
});

const { getAllJobs } = JobCardAPI

const Archived = () => {
  const [jobState, setJobState] = useState({
    jobs: []
  })


  useEffect(() => {

    getAllJobs(localStorage.getItem('userAuth'))
      .then(({ data: jobs }) => {
        console.log('got all jobs!')
        setJobState({ ...jobState, jobs })
      })
      .catch(e => console.error(e))
  }, [])


  return (
    <>

      <JobCardContext.Provider value={jobState}>
        <Grid xs={12}>
          <div className='archiveBg'>
            <ArchiveTable />
          </div >

        </Grid>
      </JobCardContext.Provider>

    </>


  )
}

export default Archived