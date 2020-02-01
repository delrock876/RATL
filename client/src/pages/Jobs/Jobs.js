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
    setJobState({ ...jobState, [event.target.name]: event.target.value })
  }

  jobState.handleArchiveJob = (id, archived) => {
    updateJob(id, { archived: true }, localStorage.getItem('userAuth'))
      .then(() => console.log('archived!'))
      .catch(e => console.error(e))
  }

  jobState.handleDeleteJob = (id) => {
    deleteJob(id, localStorage.getItem('userAuth'))
      .then(() => console.log('deleted!'))
      .catch(e => console.error(e))
  }

  jobState.handleAddJob = (event) => {
    event.preventDefault()
  
//turns input from user into an object that can be pushed into the database
    let job = {
      companyName: jobState.compName,
      jobTitle: jobState.job,
      archived: false,
      checked: false,
      date: jobState.dateApplied,
      connections: {
        name: jobState.namee,
        type: jobState.type,
        phone: jobState.phone,
        email: jobState.email 
      },
      skills: jobState.skillsRequired.split(',')
    }
//if fields are empty, user cannot create job
    if (job.companyName.length === 0 || job.jobTitle.length === 0 || job.skills.length === 0) {

      alert('Please fill out required fields')

    } else {
      addJob(job, localStorage.getItem('userAuth'))
      .then(() => {

          let jobs = JSON.parse(JSON.stringify(jobState.jobs))
          jobs.push(job)

          setJobState({
            ...jobState,
            jobs,
            compName: '',
            namee: '',
            email: '',
            phone: '',
            type: '',
            dateApplied: '',
            job: '',
            skillsRequired: ' ',
            bottom: false,
            checked: false
          })
        })
        .catch(e => console.error(e))
    }
  }

  //get all jobs
  useEffect(() => {
   
    getAllJobs(localStorage.getItem('userAuth'))
      .then(({ data: jobs }) => {
        setJobState({ ...jobState, jobs })
      })
      .catch(e => console.error(e))
  }, [])

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