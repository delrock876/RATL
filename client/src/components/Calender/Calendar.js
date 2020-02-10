import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick
import swal from 'sweetalert'
import './Calendar.scss'
import CalendarAPI from '../../utils/CalendarAPI'
import { makeStyles } from '@material-ui/core/styles'

import Card from '@material-ui/core/Card'
// import classes from '*.module.css'


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


const { addEvent, getAllReminders } = (CalendarAPI)

export default class DemoApp extends React.Component {

  calendarComponentRef = React.createRef()

  state = {


    calendarEvents: [ // initial event data
      {
        title: '',
        start: new Date()
      }

    ]
  }


  handleDateClick = (arg) => {

    swal("Set Reminder:", {
      content: "input",
    })
      .then((value) => {
        if (value !== null) {
          console.log(value)
          let newEvent = {
            title: `${value}`,
            date: arg.date
          }
          addEvent(newEvent, localStorage.getItem('userAuth'))

          this.setState({
            calendarEvents: this.state.calendarEvents.concat({
              title: `${value}`,
              date: arg.date,
              allDay: arg.allDay
            })
          })
        } else {

          swal({
            title: `Are you sure you want to leave the text area empty?`,
            icon: 'warning'
          })
        }
      })
      .catch(e => console.error(e))
  }

  componentDidMount = () => {
    getAllReminders(localStorage.getItem('userAuth'))
      .then(({ data: calendars }) => {
        console.log(calendars)
        this.setState({
          calendarEvents: calendars
        })
      })
  }

      render() {
        return (
      <div className='demo-app'>
     
        <div className='demo-app-calendar'>
          <FullCalendar
            defaultView="dayGridMonth"
            header={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            ref={this.calendarComponentRef}
            editable={true}
            weekends={this.state.calendarWeekends}
            events={this.state.calendarEvents}
            dateClick={this.handleDateClick}
          />
        </div>
      </div >
    )
  }
}
