import React, { useContext, useState, useEffect } from 'react'
import ScrapeCardContext from '../../utils/ScrapeCardContext'
import ScrapeCardAPI from '../../utils/ScrapeCardAPI'
import ScrapeCard from '../../components/ScrapeCard'
import ScrapeForm from '../../components/ScrapeForm'


const { getAllLeads, deleteLeads, addJobLeads, scrapeLeads } = ScrapeCardAPI


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
      .then(() => {
        let leads = JSON.parse(JSON.stringify(leadsState.leads))
        let newLeads = leads.filter(lead => id !== lead._id)
        setLeadsState({ ...leadsState, leads: newLeads })
      })
      .catch(e => console.error(e))
  }

  leadsState.handleScrapeLeads = () => {

    scrapeLeads(leadsState.query, leadsState.level, leadsState.city)
      .then(({ data }) => {

        let leads = JSON.parse(JSON.stringify(leadsState.leads))
        leads = [...leads, ...data]
        setLeadsState({ ...leadsState, leads })
      })
      .catch(e => console.error(e))
  }

  leadsState.handleAddLeads = (lead) => {
    //write function that takes in new lead as job object
    addJobLeads(lead, localStorage.getItem('userAuth'))
      .then(() => {  
        deleteLeads(lead.id, localStorage.getItem('userAuth'))
        .then(() =>console.log('deleted'))
        .catch(e => console.error(e))
        setLeadsState({ ...leadsState, lead})
      })

      window.location.href= '/home'
    
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
        <ScrapeForm />
        <ScrapeCard />
      </ScrapeCardContext.Provider>
    </>
  )
}

export default Scrape