import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import ScrapeCardContext from '../../utils/ScrapeCardContext'
import ScrapeCardAPI from '../../utils/ScrapeCardAPI'
import ScrapeCard from '../../components/ScrapeCard'

const { getAllLeads, addLeads, updateLeads, deleteLeads, addJobLeads } = ScrapeCardAPI


const Scrape = () => {

  const {  handleAddLeads } = useContext(ScrapeCardContext)

  const [leadsState, setLeadsState] = useState({
    leads: [],
    company: '',
    title: '',
    summary: ''
  })

  leadsState.handleInputChange = (event) => {
    setLeadsState({ ...leadsState, [event.target.name]: event.target.value })
  }

  leadsState.handleArchiveLeads = (id, archived) => {
    updateLeads(id, { archived: true }, localStorage.getItem('userAuth'))
      .then(() => console.log('archived!'))
      .catch(e => console.error(e))
  }

  leadsState.handleDeleteLeads = (id) => {
    deleteLeads(id, localStorage.getItem('userAuth'))
      .then(() => console.log('deleted!'))
      .catch(e => console.error(e))
  }

  leadsState.handleAddLeads = (event) => {
    // event.preventDefault()
    
    // axios.get('/api/leads')
    // .then(({ data }) => console.log(data))
    console.log(event)

//write function that takes in event as job object
    addJobLeads(event, localStorage.getItem('userAuth'))
    .then(() => {
      console.log('success')
      // jobs.push(event)
      deleteLeads(event.id, localStorage.getItem('userAuth'))
      .then(() => console.log('deleted!'))
      .catch(e => console.error(e))
    }
  )


  }

//get all leads
  useEffect(() => {
   
    getAllLeads(localStorage.getItem('userAuth'))
      .then(({ data: leads }) => {
        setLeadsState({ ...leadsState, leads })
      })
      .catch(e => console.error(e))
  }, [])

  return (
    <>
      <h1>Scrape Info</h1>
      <ScrapeCardContext.Provider value={leadsState}>

        <ScrapeCard />
{/* 
        <h1>THIS IS THE SCRAPE PAGE</h1>
      <form>
        <label>Job Type: </label>
        <input></input>
        <br />
        <label>Location: </label>
        <input></input>
        <br />
        <label>Distance: </label>
        <input></input>
        <br />
        <label>Full Time: </label>
        <input></input>
      </form>

      <button onClick={handleAddLeads}>BUTTON</button> */}

      </ScrapeCardContext.Provider>
      </>
  )
}

export default Scrape