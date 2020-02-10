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

const { getAllJobs, deleteJob, updateJob } = JobCardAPI

const Archived = () => {
  const [jobState, setJobState] = useState({
    jobs: [],
    archived: Boolean,
  })

  jobState.handleDeleteJob = (id) => {
    deleteJob(id, localStorage.getItem('userAuth'))
      .then(() => {
        let jobs = JSON.parse(JSON.stringify(jobState.jobs))
        let newJobs = jobs.filter(job => id !== job._id)
        setJobState({ ...jobState, jobs: newJobs })

      })
      .catch(e => console.error(e))
  }

  jobState.handleArchiveJob = (id, archived) => {
    updateJob(id, { archived: false }, localStorage.getItem('userAuth'))
      .then(() => {
        let jobs = JSON.parse(JSON.stringify(jobState.jobs))
        let jobsFiltered = jobs.filter(job => id !== job._id)
        setJobState({ ...jobState, jobs: jobsFiltered })
      })
      .catch(e => console.error(e))
  }

  useEffect(() => {

    getAllJobs(localStorage.getItem('userAuth'))
      .then(({ data: jobs }) => {
        setJobState({ ...jobState, jobs })
      })
      .catch(e => console.error(e))
  }, [])


  return (
    <>

      <JobCardContext.Provider value={jobState}>
        <Grid itemxs={12}>
          <div className='archiveBg'>
            <ArchiveTable />
          </div >
        </Grid>
      </JobCardContext.Provider>
    </>


  )
}

export default Archived