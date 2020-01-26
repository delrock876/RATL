import React , {useState, useEffect} from 'react'
import SimCard from '../../components/Card'
import JobCardAPI from '../../utils/JobCardAPI'
import JobCardContext from '../../utils/JobCardContext'

const { getAllJobs, deleteJob, updateJob } = JobCardAPI

const Home = () => {

  const [jobState, setJobState] = useState({
    jobs: []
  })

  jobState.handleSwitch = (id, checked) => {
    updateJob(id, {checked: !checked})
    .then(()=>{
      let jobs = JSON.parse(JSON.stringify(jobState.jobs))
      let switchChanged = jobs.map(job =>{
        if(job._id === id){
          job.checked = !checked
        }
        return job
      })
      setJobState({ ...jobState, jobs:switchChanged})
     })
     .catch(e=>console.error(e))  
  }

  useEffect(() => {
    getAllJobs()
      .then(({ data: jobs }) => {
        console.log(jobs)
        setJobState({ ...jobState, jobs })
      })
      .catch(e => console.error(e))
  }, [])
  
  return (

    <>
      <h1>THIS IS THE HOME PAGE</h1>
      <JobCardContext.Provider value ={jobState}>
      <SimCard />
      </JobCardContext.Provider>

    </>
  )
}

export default Home