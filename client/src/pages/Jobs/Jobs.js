import React, {useState, useEffect} from 'react'
import JobCardAPI from '../../utils/JobCardAPI'
import JobCardContext from '../../utils/JobCardContext'
import JobCard from '../../components/JobCard'
import JobDrawer from '../../components/JobDrawer'


const {getAllJobs, addJob, updateJob, deleteJob} = JobCardAPI

const Jobs = () =>{
  
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
    skillsRequired: ''
  })

jobState.handleInputChange = (event) => {
  console.log(event.target.value)
  setJobState({...jobState, [event.target.name]: event.target.value})
}

  jobState.handleAddJob = (event)=>{
    event.preventDefault()
    addJob({
      companyName: jobState.compName,
      contactName: jobState.namee,
      contactEmail: jobState.email,
      contactPhone: jobState.phone,
      contactType: jobState.type,
      archived: false,
      date: jobState.dateApplied,
      jobTitle: jobState.job,
      skills: jobState.skillsRequired
    })
      .then(() => console.log('hello'))
    .catch(e => console.error(e))
  }

  return(
    <>
  <h1>Job Info</h1>
 <JobCardContext.Provider value={jobState}>

    <JobDrawer/>
    <JobCard/>

 </JobCardContext.Provider>
  </>
  )
}
export default Jobs