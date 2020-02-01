import axios from 'axios'

const ScrapeCardAPI = {
  
  getAllLeads= () => axios.get('/api/leads'),

  addLeads = () => axios.post('/api/leads'),

  updateLeads = () => axios.put(`/api/leads/${id}`),

  deleteLeads = () => axios.delete(`/api/leads/${id}`),

}

export default ScrapeCardAPI