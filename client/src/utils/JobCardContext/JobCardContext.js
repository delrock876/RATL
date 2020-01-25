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
  checkedA: Boolean,
  checkedB: Boolean,
  handleChange:()=>{},
  handleInputChange: () => { },
  handleArchiveJob: () => { },
  handleAddJob: () => { },
  handleDeleteJob: () => { },
  toggleDrawer: () => { }
})

export default JobCardContext