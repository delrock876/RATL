import React, { useContext } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick
import swal from 'sweetalert'
import './Calendar.scss'
import CalendarAPI from '../../utils/CalendarAPI'
const { addEvent, getAllReminders } = (CalendarAPI)

export default class DemoApp extends React.Component {

  calendarComponentRef = React.createRef()
  
  state = {
    calendarWeekends: true,
        calendarEvents : [ // initial event data
      { title: '', 
      start: new Date() }
    ]
  }


  toggleWeekends = () => {
    this.setState({ // update a property
      calendarWeekends: !this.state.calendarWeekends
    })
  }

  gotoPast = () => {
    let calendarApi = this.calendarComponentRef.current.getApi()
    calendarApi.gotoDate('2000-01-01') // call a method on the Calendar object
  }


  handleDateClick = (arg) => {

      swal("Set Reminder:", {
        content: "input",
      })
      .then((value) => {
        if( value !== null){
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
        }else{
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
      // <CalendarContext.Consumer>
      <div className='demo-app'>
        <div className='demo-app-top'>
          <button className='btn' onClick={ this.toggleWeekends }>toggle weekends</button>&nbsp;
          <button className='btn' onClick={ this.gotoPast }>go to a date in the past</button>&nbsp;
        </div>
        <div className='demo-app-calendar'>
          <FullCalendar
            defaultView="dayGridMonth"
            header={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            }}
            plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
            ref={ this.calendarComponentRef }
            editable={true}
            weekends={ this.state.calendarWeekends }
            events={ this.state.calendarEvents }
            dateClick={ this.handleDateClick }
            />
        </div>
      </div>
      // </CalendarContext.Consumer>
    )
  }
}