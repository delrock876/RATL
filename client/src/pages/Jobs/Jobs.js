import React, { useState, useEffect } from 'react'
import JobCardAPI from '../../utils/JobCardAPI'
import JobCardContext from '../../utils/JobCardContext'
import JobCard from '../../components/JobCard'
import JobDrawer from '../../components/JobDrawer'
import { makeStyles } from '@material-ui/core/styles'
import GoogleInfo from '../../components/GoogleInfo'


const { getAllJobs, addJob, updateJob, deleteJob, addConnect, addSkills } = JobCardAPI

const useStyles = makeStyles({
  title: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    fontSize: "2em",
    color: "#78b746",
    fontFamily: 'DM Sans, sans-serif',
    fontWeight: "bold",
  },
  bg: {
    width: "100%",
    marginLeft: 20,
    marginTop: 20,
  },
  para: {
    // fontSize: "1.4em",
    color: "black",
    fontFamily: 'DM Sans, sans-serif'
  },
});

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
    summary: '',
    job: '',
    skillsRequired: '',
    bottom: false,
    connections: [],
    newSkills: '',
    status: ''

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


  jobState.handleAddStatus = (id, status) => {

    let jobs = JSON.parse(JSON.stringify(jobState.jobs))

    // let updateStatus = JSON.parse(JSON.stringify(jobState.status))

    let modJob = jobs.map(job => {
      if (job._id === id) {
        job.status = jobState.status
        updateJob(id, { status: job.status }, localStorage.getItem('userAuth'))
        console.log(job.status)

      }
      return job
    })
    setJobState({ ...jobState, jobs: modJob })
    // updateJob(id, {status: updateStatus}, localStorage.getItem('userAuth'))

    // setJobState({})
    // console.log(status)
  }


  jobState.handleAddSkills = (id) => {

    let jobs = JSON.parse(JSON.stringify(jobState.jobs))

    let skill = jobState.newSkills

    let modJob = jobs.map(job => {
      if (job._id === id) {
        job.skills = job.skills.concat(skill.split(','))
        console.log(job.skills)
        updateJob(id, { skills: job.skills }, localStorage.getItem("userAuth"))
      }
      return job
    })
    setJobState({ ...jobState, jobs: modJob, newSkills: '' })
  }

  jobState.handleDeleteSkill = (id, skill) => {

  let jobs = JSON.parse(JSON.stringify(jobState.jobs))
  let modJobs = jobs.map(job => {
    if (job._id === id) {
      job.skills = job.skills.filter(jobSkill => jobSkill !== skill)
      updateJob(id, { skills: job.skills }, localStorage.getItem('userAuth'))
    }
    return job
  })
  setJobState({ ...jobState, jobs: modJobs })
}

  jobState.handleDeleteJob = (id) => {
    deleteJob(id, localStorage.getItem('userAuth'))

      .then(() => {
        let jobs = JSON.parse(JSON.stringify(jobState.jobs))
        let newJobs = jobs.filter(job => id !== job._id)
        setJobState({ ...jobState, jobs: newJobs })
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


  jobState.handleAddConnection = (id) => {

    let jobs = JSON.parse(JSON.stringify(jobState.jobs))

    let contactInfo = {
      name: jobState.namee,
      type: jobState.type,
      phone: jobState.phone,
      email: jobState.email
    }

    let modJob = jobs.map(job => {
      if (id === job._id) {
        job.connections.push(contactInfo)
        console.log(job.connections)
        updateJob(id, { connections: job.connections }, localStorage.getItem('userAuth'))
      }
      return job
    })
    setJobState({
      ...jobState,
      jobs: modJob,
      namee: '',
      type: '',
      phone: '',
      email: ''
    })
  }

  //get all jobs
  useEffect(() => {

    getAllJobs(localStorage.getItem('userAuth'))
      .then(({ data: jobs }) => {
        setJobState({ ...jobState, jobs })
      })
      .catch(e => console.error(e))
  }, [])

  const classes = useStyles();
  return (
    <>
      <div className='jobsBg'>
        <h1 className={classes.title}>Job Info</h1>
        <JobCardContext.Provider value={jobState}>
        <GoogleInfo />
          <JobDrawer />
          <JobCard />
        </JobCardContext.Provider>

      </div>
    </>
  )
}
export default Jobs