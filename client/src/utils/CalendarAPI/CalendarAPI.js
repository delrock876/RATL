import axios from 'axios'

const CalendarAPI = {
        handleDateClick:(calendar, token) => axios.post('/api/calendar', calendar,
        {
          headers:
            { 'Authorization': `Bearer ${token}` }
        })
}

export default CalendarAPI