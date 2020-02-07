import { createContext } from 'react'

const ScrapeCardContext = createContext({
  leads: [],
  handleInputChange: () => { },
  handleAddLeads: () => { },
  handleDeleteLeads: () => { },
  handleArchiveLeads: () => { },
  handleScrapeLeads: () => { }
})

export default ScrapeCardContext