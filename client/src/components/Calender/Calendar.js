import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick
import swal from 'sweetalert'
import './Calendar.scss'
import CalendarAPI from '../../utils/CalendarAPI'

import Card from '@material-ui/core/Card'

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
<<<<<<< HEAD
  }

  componentDidMount = () => {
    getAllReminders(localStorage.getItem('userAuth'))
      .then(({ data: calendars }) => {
        console.log(calendars)
        this.setState({
          calendarEvents: calendars
=======
    }

    componentDidMount = () => {
      getAllReminders(localStorage.getItem('userAuth'))
        .then(({ data: calendars }) => {
          console.log(calendars)
          this.setState({
            calendarEvents: calendars        
            })
>>>>>>> master
        })
      })
  }



  render() {
    return (
      <div className='demo-app'>

        <Card>
                <h2>Reminder:</h2>
        </Card>

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
      </div>
    )
  }
}
