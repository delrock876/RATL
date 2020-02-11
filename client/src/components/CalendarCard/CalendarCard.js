import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CalendarAPI from '../../utils/CalendarAPI'
import Calendar from '../Calender'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

const { getAllReminders } = CalendarAPI



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
        this.setState({
          calendarEvents: calendars
        })
      })
  }

  render() {

    let currEvent = this.state.calendarEvents
    return (
<div>
      <Card >
        <CardContent >
          <List className="Card" style={{ maxHeight: 150, overflow: 'auto' }} >
            {
              currEvent.map(item =>
                <ListItem>
                  <li>{item.title} on {item.date}</li>
                </ListItem>
              )
            }
          </List>
        </CardContent>
      </Card>
      </div>
    )

  }
}

export default CalendarCard