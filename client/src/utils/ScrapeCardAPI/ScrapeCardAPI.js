import axios from 'axios'

const ScrapeCardAPI = {
  
  getAllLeads: (token) => axios.get('/api/leads', {
    headers:
      { 'Authorization': `Bearer ${token}` }
  }),

  addLeads: (lead, token) => axios.post('/api/leads', lead, {
    headers:
      { 'Authorization': `Bearer ${token}` }
  }),

  updateLeads: (id, token, values) => axios.put(`/api/leads/${id}`, values,
  {
    headers:
      { 'Authorization': `Bearer ${token}` }
  }),

  deleteLeads: (id, token) => axios.delete(`/api/leads/${id}`, 
  {
    headers:
      { 'Authorization': `Bearer ${token}` }
  }),

  addJobLeads: (event, token) => axios.post('/api/jobs', event, {
    headers:
      { 'Authorization': `Bearer ${token}` }
  }),
 
  scrapeLeads: () => axios.get('/api/scrape')
}

export default ScrapeCardAPI