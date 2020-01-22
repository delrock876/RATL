import axios from 'axios'

const JobCardAPI = {
  getAllJobs: ( ) => axios.get('/jobs'),
  addJob: ( job ) => axios.post('/jobs', job),
  updateJob: ( id, values ) => axios.put(`/jobs/${id}`, values),
  deleteJob: ( id ) => axios.delete(`/jobs/${id}`)
}

export default JobCardAPI