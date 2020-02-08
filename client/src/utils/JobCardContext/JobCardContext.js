import { createContext } from 'react'

const JobCardContext = createContext({
  jobs: [],
  compName: '',
  namee: '',
  email: '',
  phone: '',
  type: '',
  archived: Boolean,
  dateApplied: '',
  job: '',
  skillsRequired: '',
  bottom: Boolean,
  summary: '',
  handleSwitch:()=>{},
  handleInputChange: () => { },
  handleArchiveJob: () => { },
  handleAddJob: () => { },
  handleDeleteJob: () => { },
  handleArchiveJob: () => { },
  toggleDrawer: () => { },
  handleAddConnection: () => { }
})

export default JobCardContext