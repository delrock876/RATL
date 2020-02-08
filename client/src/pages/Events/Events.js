import React, { useState, useEffect } from 'react'
import Calendar from '../../components/Calender'
import CalendarContext from '../../utils/CalendarContext/CalendarContext'
import CalendarAPI from '../../utils/CalendarAPI'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  title: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    fontSize: "2em",
    color: "white",
    fontFamily: 'Inder, sans-serif',
    fontWeight: "bold",
  },
  para: {
    fontSize: "1.4em",
    color: "white",
    fontFamily: 'DM Sans, sans-serif'
  },
  para2: {
    fontSize: "1em",
    color: "black",
    fontFamily: 'DM Sans, sans-serif'
  }
});

const { getAllReminders, handleDateClick } = CalendarAPI

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

  return (
    <div className='mainBg'>
      <>
        <div className='calendarBg'>
          <CalendarContext.Provider value={calendarState}>
            <Calendar />
          </CalendarContext.Provider>
        </div>
      </>
    </div>
  )
}


export default Events