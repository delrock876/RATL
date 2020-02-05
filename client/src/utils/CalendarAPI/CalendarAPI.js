import axios from 'axios'

const CalendarAPI = {

        getAllReminders: (token) => axios.get('/api/calendar', {
    headers:
      { 'Authorization': `Bearer ${token}` }
  }),    
        addEvent:(calendar, token) => axios.post('/api/calendar', calendar,
        {
          headers:
            { 'Authorization': `Bearer ${token}` }
        })
}

export default CalendarAPI