import React, {useState} from 'react'
import Calendar from '../../components/Calender'
import CalendarContext from '../../utils/CalendarContext/CalendarContext'
import CalendarAPI from '../../utils/CalendarAPI'

const {handleDateClick} = CalendarAPI

const Events = () => {


  const [calendarState, setCalendarState] = useState({
    reminder: '',
    date: ''
  })

  calendarState.handleAddReminder = (event) => {
    event.preventDefault()

    let calendar = {
      reminder: calendarState.reminder.split(','),
      date: calendarState.date
    }

    handleDateClick(calendar, localStorage.getItem('userAuth')) 
        .then(() => {
          let calendars = JSON.parse(JSON.stringify(calendarState.calendars))
          calendars.push(calendar)

          setCalendarState({
            ...calendarState,
            calendar,
            reminder: '',
            date: ''
          })
        })
        .catch(e => console.error(e))
  }


  return(

    <>
    <h1>THIS IS YOUR CONNECTIONS PAGE</h1>
    <CalendarContext.Provider>
    <Calendar /> 
    </CalendarContext.Provider>

    </>
  )
}


export default Events