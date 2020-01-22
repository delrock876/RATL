import React, {createContext} from 'react'

const JobCardContext = createContext({
  company: '',
  contactName: '',
  contactEmail: '',
  contactPhone: '',
  contactType: '',
  date: '',
  jobTitle: '',
  skills: '',
  handleArchiveJob: () => { },
  handleAddJob: () => { },
  handleDeleteJob: () => { }
})

export default JobCardContext