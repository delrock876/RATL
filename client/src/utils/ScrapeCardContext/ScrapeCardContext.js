import { createContext } from 'react'

const ScrapeCardContext = createContext({
  archived: Boolean,
  leads: [],
  handleInputChange: () => { },
  handleAddLeads: () => { },
  handleDeleteLeads: () => { },
  handleScrapeLeads: () => { }
})

export default ScrapeCardContext