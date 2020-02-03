import React, {useState, useEffect} from 'react'
import Calendar from '../../components/Calender'
import CalendarContext from '../../utils/CalendarContext/CalendarContext'
import CalendarAPI from '../../utils/CalendarAPI'

const {getAllReminders, handleDateClick} = CalendarAPI

const Events = () => {


  const [calendarState, setCalendarState] = useState({
    calendars: [],
    reminder: '',
    date: ''
  })

  calendarState.handleAddReminder = (event) => {
    event.preventDefault()

    let calendar = {
      reminders: calendarState.reminder.split(' '),
      dates: calendarState.date
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

    //get all jobs
    useEffect(() => {
   
      getAllReminders(localStorage.getItem('userAuth'))
        .then(({ data: calendars }) => {
          setCalendarState({ ...calendarState, calendars })
        })
        .catch(e => console.error(e))
    }, [])



  return(

    <>
    <h1>THIS IS YOUR CONNECTIONS PAGE</h1>
    <CalendarContext.Provider value={calendarState}>
    <Calendar /> 
    </CalendarContext.Provider>

    </>
  )
}


export default Events