import axios from 'axios'

const JobCardAPI = {
  
  getAllJobs: (token) => axios.get('/api/jobs', {
    headers:
      { 'Authorization': `Bearer ${token}` }
  }),

  addJob: (token, job) => axios.post('/api/jobs',
    {
      headers:
        { 'Authorization': `Bearer ${token}` }
    }, job),

  updateJob: (id, values) => axios.put(`/api/jobs/${id}`, values),
  deleteJob: (id) => axios.delete(`/api/jobs/${id}`)
  // addConnection: ( connection, parent ) => axios.post('/api/connections/')
}

export default JobCardAPI