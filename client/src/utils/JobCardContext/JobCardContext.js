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
  connections: [],
  handleInputChange: () => { },
  handleArchiveJob: () => { },
  handleAddJob: () => { },
  handleDeleteJob: () => { },
  toggleDrawer: () => { },
  handleAddConnection: () => { },
  handleAddSkills:()=> { }
})

export default JobCardContext