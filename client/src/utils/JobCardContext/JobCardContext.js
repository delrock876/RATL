import {createContext} from 'react'

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
  handleInputChange: () => { },
  handleArchiveJob: () => { },
  handleAddJob: () => { },
  handleDeleteJob: () => { }
})

export default JobCardContext