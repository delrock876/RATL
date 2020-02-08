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
    summary: 'hiiiiii',
    job: '',
    skillsRequired: '',
    bottom: false,

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
      .then(() => {
        let jobs = JSON.parse(JSON.stringify(jobState.jobs))
        let jobsFiltered = jobs.filter(job => id !== job._id)
        setJobState({ ...jobState, jobs: jobsFiltered })

      })
      .catch(e => console.error(e))
  }

  jobState.handleDeleteJob = (id) => {
    console.log(id)
    deleteJob(id, localStorage.getItem('userAuth'))

    .then(() => {
      let jobs = JSON.parse(JSON.stringify(jobState.jobs))
       let newJobs = jobs.filter(job => id !== job._id)
       setJobState({...jobState, jobs: newJobs})

      })
      .catch(e => console.error(e))
  }

  jobState.handleAddJob = (event) => {
    event.preventDefault()

    //turns input from user into an object that can be pushed into the database
    let job = {
      companyName: jobState.compName,
      jobTitle: jobState.job,
      summary: jobState.summary,
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

      .then(({ data }) => {

          let jobs = JSON.parse(JSON.stringify(jobState.jobs))
          jobs.push(data)

          setJobState({
            ...jobState,
            jobs,
            compName: '',
            namee: '',
            email: '',
            summary: '',
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
      <div className='jobsBg'>
        <h1>Job Info</h1>
        <JobCardContext.Provider value={jobState}>

          <JobDrawer />
        
              <JobCard />
        
        </JobCardContext.Provider>

      </div>
    </>
  )
}
export default Jobs