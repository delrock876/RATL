import { createContext } from 'react'

const ScrapeCardContext = createContext({
  leads: [],
  query: '',
  city: '',
  level: '',
  handleInputChange: () => { },
  handleAddLeads: () => { },
  handleDeleteLeads: () => { },
  handleArchiveLeads: () => { },
  handleScrapeLeads: () => { }
})

export default ScrapeCardContext