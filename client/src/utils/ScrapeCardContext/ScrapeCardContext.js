import { createContext } from 'react'

const ScrapeCardContext = createContext({
  archived: Boolean,
  leads: [],
  query: '',
  city: '',
  level: '',
  company: '',
  title: '',
  summary: '',
  handleInputChange: () => { },
  handleAddLeads: () => { },
  handleDeleteLeads: () => { },
  handleScrapeLeads: () => { }
})

export default ScrapeCardContext