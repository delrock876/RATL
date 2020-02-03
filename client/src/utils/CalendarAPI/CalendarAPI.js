import axios from 'axios'

const CalendarAPI = {

        getAllReminders: (token) => axios.get('/api/calendar', {
    headers:
      { 'Authorization': `Bearer ${token}` }
  }),    
        handleDateClick:(calendar, token) => axios.post('/api/calendar', calendar,
        {
          headers:
            { 'Authorization': `Bearer ${token}` }
        })
}

export default CalendarAPI