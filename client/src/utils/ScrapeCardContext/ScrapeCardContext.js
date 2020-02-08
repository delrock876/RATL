import { createContext } from 'react'

const ScrapeCardContext = createContext({
  archived: Boolean,
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