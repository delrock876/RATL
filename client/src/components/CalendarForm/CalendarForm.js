import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Calendar from '../Calender'



class CalendarForm extends React.Component {


    


    render() {
        return( 
    
        <Card className='Form'>
            <CardContent>
        <h2> Reminder: {}</h2>
         <h3> Date: {}</h3>
            </CardContent>
    
        </Card>
        )
    
    }
    }

export default CalendarForm