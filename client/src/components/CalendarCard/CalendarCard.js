import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CalendarAPI from '../../utils/CalendarAPI'
import Calendar from '../Calender'
import { makeStyles } from '@material-ui/core/styles'

const { getAllReminders } = CalendarAPI


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
    for (let i = 0; i < this.state.calendarEvents.length; i++) {
      return this.state.calendarEvents[i].title
    }
  }


  render() {
    return (
      <Card className='Card'>
        <CardContent>
          <h4> Upcoming Events: {this.titleLoop()}</h4>

        </CardContent>

      </Card>
    )

  }
}

export default CalendarCard