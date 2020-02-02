import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import ScrapeCardContext from '../../utils/ScrapeCardContext'
import ScrapeCardAPI from '../../utils/ScrapeCardAPI'
import ScrapeCard from '../../components/ScrapeCard'

const { getAllLeads, addLeads, updateLeads, deleteLeads } = ScrapeCardAPI


const Scrape = () => {

  const {  handleAddLeads } = useContext(ScrapeCardContext)

  const [leadsState, setLeadsState] = useState({
    leads: []
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

  leadsState.handleAddLeads = () => {
    // event.preventDefault()
    console.log('hello')
  }

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