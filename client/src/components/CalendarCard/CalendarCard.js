import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CalendarAPI from '../../utils/CalendarAPI'
import Calendar from '../Calender'

const {getAllReminders} = CalendarAPI



class CalendarCard extends React.Component {

    state = {


        calendarEvents: [ // initial event data
          {
            title: '',
            start: new Date()
          }
    
        ]
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

      titleLoop = () => {
        for( let i = 0; i < this.state.calendarEvents.length; i++) {
            return this.state.calendarEvents[i].title
        }
    }

    
    render() {
        return( 
    
        <Card className='Card'>
            <CardContent>
        <h2> Upcoming Events: {this.titleLoop()}</h2>
       
            </CardContent>
    
        </Card>
        )
    
    }
    }

export default CalendarCard