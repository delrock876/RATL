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

  updateJob: (id, values, token) => axios.put(`/api/jobs/${id}`, values, {
    headers:
      { 'Authorization': `Bearer ${token}` }
  }),
  deleteJob: (id, token) => axios.delete(`/api/jobs/${id}`, {
    headers:
      { 'Authorization': `Bearer ${token}` }
  })

}

export default JobCardAPI