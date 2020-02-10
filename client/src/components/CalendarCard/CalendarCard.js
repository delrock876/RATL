import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CalendarAPI from '../../utils/CalendarAPI'
import Calendar from '../Calender'

const {addEvent, getAllReminders} = CalendarAPI



class CalendarCard extends React.Component {


    
    
    render() {
        console.log(addEvent)
        return( 
    
        <Card className='Card'>
            <CardContent>
        <h2> Reminder: {getAllReminders && getAllReminders.title}</h2>
         <h3> Date: {}</h3>
            </CardContent>
    
        </Card>
        )
    
    }
    }

export default CalendarCard