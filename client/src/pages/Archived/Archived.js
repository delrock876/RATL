import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import ArchiveTable from '../../components/ArchiveTable'
import JobCardAPI from "../../utils/JobCardAPI"
import JobCardContext from '../../utils/JobCardContext'

const useStyles = makeStyles({
  title: {
    fontSize: 14,
    textAlign: 'center',
  },
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