import React , {useState, useEffect} from 'react'
import SimCard from '../../components/Card'
import JobCardAPI from '../../utils/JobCardAPI'
import JobCardContext from '../../utils/JobCardContext'



const { getAllJobs, deleteJob } = JobCardAPI

const Home = () => {

  const [jobState, setJobState] = useState({
    jobs: [],
    checkedA:true,
    checkedB:true
  })

  jobState.handleChange = name => event => {
    setJobState({ ...jobState, [name]: event.target.checked })
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