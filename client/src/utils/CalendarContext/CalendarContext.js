import { createContext } from 'react'


const CalendarContext = createContext({
    reminder: [{type: String}],
    date: [{type:Date.now()}],
    handleAddReminder: () => { },
    handleDateClick: () => { }
})

export default CalendarContext






// swal("Set Reminder:", {
//     content: "input",
//   })
//   .then((value) => {
//     if( value !== null){
//      data: this.setState({
//        calendarEvents: this.state.calendarEvents.concat({
//          title: `${value}`,
//          start: event.date,
//          allDay: event.allDay
//        })
//      })
//     }else{
//       swal({
//         title: `Are you sure you want to leave the text area empty?`,
//         icon: 'warning'
//       })
//     }