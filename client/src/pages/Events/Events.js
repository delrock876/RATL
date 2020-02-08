import React from 'react'
import Calendar from '../../components/Calender'
import CalendarContext from '../../utils/CalendarContext/CalendarContext'

const Events = () => {


  return (
    <div className='mainBg'>
      <>
        <div className='calendarBg'>
          <h1>THIS IS YOUR CONNECTIONS PAGE</h1>
          <CalendarContext.Provider>
            <Calendar />
          </CalendarContext.Provider>
        </div>
      </>
    </div>
  )
}

export default Events