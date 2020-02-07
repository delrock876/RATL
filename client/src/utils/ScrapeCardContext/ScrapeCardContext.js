import { createContext } from 'react'

const ScrapeCardContext = createContext({
  archived: Boolean,
  leads: [],
  handleInputChange: () => { },
  handleAddLeads: () => { },
  handleDeleteLeads: () => { },
  handleArchiveLeads: () => { },
  handleScrapeLeads: () => { }
})

export default ScrapeCardContext