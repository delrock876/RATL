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
  handleScrapeLeads: () => { }
})

export default ScrapeCardContext