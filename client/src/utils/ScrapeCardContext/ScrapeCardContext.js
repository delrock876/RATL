import { createContext } from 'react'

const ScrapeCardContext = createContext({
  leads: [],
  handleInputChange: () => { },
  handleAddLeads: () => { },
  handleDeleteLeads: () => { },
  handleArchiveLeads: () => { }
})

export default ScrapeCardContext