import React, { useState, useEffect } from 'react'
import SimCard from '../../components/Card'
import JobCardAPI from '../../utils/JobCardAPI'
import JobCardContext from '../../utils/JobCardContext'

const { getAllJobs, updateJob } = JobCardAPI

const Home = () => {

  const [jobState, setJobState] = useState({
    jobs: []
  })

  useEffect(() => {
    getAllJobs(localStorage.getItem('userAuth'))
      .then(({ data: jobs }) => {
        console.log(jobs)
        setJobState({ ...jobState, jobs })
      })
      .catch(e => console.error(e))
  }, [])

  return (
    <div className='mainBg'>
      <>
        <h1>THIS IS THE HOME PAGE</h1>
        <JobCardContext.Provider value={jobState}>
          <SimCard />
        </JobCardContext.Provider>
      </>
    </div>
  )
}

export default Home