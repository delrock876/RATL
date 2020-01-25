import axios from 'axios'

const JobCardAPI = {
  getAllJobs: ( ) => axios.get('/api/jobs'),
  addJob: ( job ) => axios.post('/api/jobs', job),
  updateJob: ( id, values ) => axios.put(`/api/jobs/${id}`, values),
  deleteJob: ( id ) => axios.delete(`/api/jobs/${id}`)
}

export default JobCardAPI