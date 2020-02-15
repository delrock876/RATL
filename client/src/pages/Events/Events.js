import React from 'react'
import Calendar from '../../components/Calender'
import CalendarContext from '../../utils/CalendarContext/CalendarContext'
import CalendarAPI from '../../utils/CalendarAPI'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  title: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    fontSize: "2em",
    color: "black",
    fontFamily: 'DM Sans, sans-serif',
    fontWeight: "bold",
    textAlign: "center"
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
  },
  marg: {
    margin: "16px",
    fontFamily: 'DM Sans, sans-serif',
    color: "#fbaa10"
  }
});


const { getAllReminders, handleDateClick } = CalendarAPI

const Events = () => {
  const classes = useStyles();
  return (
    <>
      <div className='calendarBg'>
        <h3 className={classes.marg}>Your Events</h3>
        <hr/>
        <CalendarContext.Provider>
          <Calendar />
        </CalendarContext.Provider>
      </div>
    </>
  )
}

export default Events