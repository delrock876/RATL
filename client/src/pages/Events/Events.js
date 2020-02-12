import React from 'react'
import Calendar from '../../components/Calender'
import CalendarContext from '../../utils/CalendarContext/CalendarContext'
import CalendarAPI from '../../utils/CalendarAPI'
import { makeStyles } from '@material-ui/core/styles';
// import classes from '*.module.css';

const useStyles = makeStyles({
  title: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    fontSize: "2em",
    color: "white",
    fontFamily: 'Inder, sans-serif',
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
  }
});


const { getAllReminders, handleDateClick } = CalendarAPI

const Events = () => {
  const classes = useStyles();
  return (
    <>
      <div className='calendarBg'>
        <h4 className={classes.title}> Your Events Overview</h4>
        <CalendarContext.Provider>
          <Calendar />
        </CalendarContext.Provider>
      </div>
    </>
  )
}

export default Events