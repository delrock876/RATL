import React from 'react'
import Calendar from '../../components/Calender'
import CalendarContext from '../../utils/CalendarContext/CalendarContext'

const Events =()=>{

  return(

    <>
    <h1>THIS IS YOUR CONNECTIONS PAGE</h1>
    <CalendarContext.Consumer>
    <Calendar /> 
    </CalendarContext.Consumer>

    </>
  )
}

export default Events