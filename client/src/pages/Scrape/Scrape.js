import React, { useContext, useState, useEffect } from 'react'
import ScrapeCardContext from '../../utils/ScrapeCardContext'
import ScrapeCardAPI from '../../utils/ScrapeCardAPI'
import ScrapeCard from '../../components/ScrapeCard'

const { getAllLeads, updateLeads, deleteLeads, addJobLeads, scrapeLeads } = ScrapeCardAPI


const Scrape = () => {

  const [leadsState, setLeadsState] = useState({
    leads: [],
    company: '',
    title: '',
    summary: '',
    archived: Boolean
  })

  leadsState.handleInputChange = (event) => {
    setLeadsState({ ...leadsState, [event.target.name]: event.target.value })
  }


  leadsState.handleDeleteLeads = (id) => {
    deleteLeads(id, localStorage.getItem('userAuth'))
      .then(() => console.log('deleted!'))
      .catch(e => console.error(e))
  }

  leadsState.handleScrapeLeads = () => {
    scrapeLeads()
    .then(({ data }) => {
      let leads = JSON.parse(JSON.stringify(leadsState.leads))
      console.log(data)
  
      leads = [...leads, ...data]
      
  
        setLeadsState({ ...leadsState, leads})
  
      })
  }

  leadsState.handleAddLeads = (event) => {
//write function that takes in event as job object
    addJobLeads(event, localStorage.getItem('userAuth'))
    .then(() => {
      console.log('success')
      // jobs.push(event)
      deleteLeads(event.id, localStorage.getItem('userAuth'))
      .then(() => console.log('deleted!'))
      .catch(e => console.error(e))
    })
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
      
      <button onClick={leadsState.handleScrapeLeads}>LARGE BUTTON</button>
      <ScrapeCardContext.Provider value={leadsState}>
        <ScrapeCard />
      </ScrapeCardContext.Provider>
      </>
  )
}

export default Scrape