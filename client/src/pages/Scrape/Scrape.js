import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import ScrapeCardContext from '../../utils/ScrapeCardContext'
import ScrapeCardAPI from '../../utils/ScrapeCardAPI'
import ScrapeCard from '../../components/ScrapeCard'

const { getAllLeads, addLeads, updateLeads, deleteLeads, addJobLeads, scrapeLeads } = ScrapeCardAPI


const Scrape = () => {

  const {  handleAddLeads, handleScrapeLeads } = useContext(ScrapeCardContext)

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

  leadsState.handleScrapeLeads = () => {
    console.log('testing123')
    scrapeLeads()
    .then(({ data }) => {
        let leads = JSON.parse(JSON.stringify(leadsState.leads))
        leads = [...leads, ...data]
        setLeadsState({ ...leadsState, leads })
    })
  }

  leadsState.handleAddLeads = (event) => {
    // event.preventDefault()
    
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
      <button onClick={leadsState.handleScrapeLeads}>LARGE BUTTON</button>
      <ScrapeCardContext.Provider value={leadsState}>

        <ScrapeCard />

      </ScrapeCardContext.Provider>
      </>
  )
}

export default Scrape