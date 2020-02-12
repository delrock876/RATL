import React, { useContext, useState, useEffect } from 'react'
import ScrapeCardContext from '../../utils/ScrapeCardContext'
import ScrapeCardAPI from '../../utils/ScrapeCardAPI'
import ScrapeCard from '../../components/ScrapeCard'
import ScrapeForm from '../../components/ScrapeForm'


const { getAllLeads, updateLeads, deleteLeads, addJobLeads, scrapeLeads } = ScrapeCardAPI


const Scrape = () => {

  const [leadsState, setLeadsState] = useState({
    leads: [],
    company: '',
    title: '',
    summary: '',
    query: '',
    city: '',
    level: '',
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
    
    console.log(leadsState.query)
    console.log(leadsState.level)
    
    scrapeLeads(leadsState.query, leadsState.level, leadsState.city)
    .then(({data}) => {
   
      let leads = JSON.parse(JSON.stringify(leadsState.leads))
  
      leads = [...leads, ...data]
      
        setLeadsState({ ...leadsState, leads})
  
      })
      .catch(e=>console.error(e))
  }

  leadsState.handleAddLeads = (event) => {

//write function that takes in event as job object
    addJobLeads(event, localStorage.getItem('userAuth'))
    .then(() => {
      deleteLeads(event.id, localStorage.getItem('userAuth'))
      .then(() => console.log('deleted!'))
      .catch(e => console.error(e))
    })
    window.location.reload()
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
      <ScrapeCardContext.Provider value={leadsState}>
        <ScrapeForm/>
        <ScrapeCard />
      </ScrapeCardContext.Provider>
      </>
  )
}

export default Scrape