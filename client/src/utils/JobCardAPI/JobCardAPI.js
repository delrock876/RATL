import axios from 'axios'

const JobCardAPI = {
  
  getAllJobs: (token) => axios.get('/api/jobs', {
    headers:
      { 'Authorization': `Bearer ${token}` }
  }),

  addJob: (job, token) => axios.post('/api/jobs', job,
    {
      headers:
        { 'Authorization': `Bearer ${token}` }
    }),

  updateJob: (id, values) => axios.put(`/api/jobs/${id}`, values),
  deleteJob: (id) => axios.delete(`/api/jobs/${id}`)
  // addConnection: ( connection, parent ) => axios.post('/api/connections/')
}

export default JobCardAPI