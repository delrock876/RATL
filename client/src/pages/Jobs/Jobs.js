import React, { useState, useEffect } from 'react'
import JobCardAPI from '../../utils/JobCardAPI'
import JobCardContext from '../../utils/JobCardContext'
import JobCard from '../../components/JobCard'
import JobDrawer from '../../components/JobDrawer'


const { getAllJobs, addJob, updateJob, deleteJob } = JobCardAPI

const Jobs = () => {

  const [jobState, setJobState] = useState({
    jobs: [],
    compName: '',
    namee: '',
    email: '',
    phone: '',
    type: '',
    archived: Boolean,
    dateApplied: '',
    job: '',
    skillsRequired: '',
    bottom: false
    
  })

  jobState.toggleDrawer = bool => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setJobState({ ...jobState, bottom: bool })
  }

  jobState.handleInputChange = (event) => {
    console.log(event.target.value)
    setJobState({ ...jobState, [event.target.name]: event.target.value })
  }

  jobState.handleAddJob = (event) => {
    event.preventDefault()
    let job = {

      companyName: jobState.compName,
      contactName: jobState.namee,
      contactEmail: jobState.email,
      contactPhone: jobState.phone,
      contactType: jobState.type,
      archived: false,
      date: jobState.dateApplied,
      jobTitle: jobState.job,
      skills: jobState.skillsRequired

    }
    addJob(job)
      .then(() => {

        let jobs = JSON.parse(JSON.stringify(jobState.jobs))
        jobs.push(job)
  
        setJobState({...jobState,
          jobs, 
          compName: '',
          namee: '',
          email: '',
          phone: '',
          type: '',
          dateApplied: '',
          job: '',
          skillsRequired: '',
          bottom: false
        })


      }
      )
      .catch(e => console.error(e))
  }

  return (
    <>
      <h1>Job Info</h1>
      <JobCardContext.Provider value={jobState}>

        <JobDrawer />
        <JobCard />

      </JobCardContext.Provider>
    </>
  )
}
export default Jobs