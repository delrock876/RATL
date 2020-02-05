const { Calendar,User } = require('../models')
const passport = require('passport')

module.exports = app => {

    // get all reminders
    app.get('/api/calendar', passport.authenticate('jwt', { session: false }), (req, res) => {
      Calendar.find()
        .then(calendars => res.json(calendars))
        .catch(e => console.log(e))
    })


    // Post a Calendar remider
    app.post('/api/calendar', passport.authenticate('jwt', { session: false }), (req, res) => {

        const { _id: userAuth } = req.user
        const { reminder, date } = req.body
        //creates json with these key value pairs
        Calendar.create({ reminder, date })
          .then(calendars => {
            
            User.updateOne({ _id: userAuth }, { $push: { userCalendar: calendars } })
              .then(() => res.json(calendars))
              .catch(e => console.error(e))
          })
          .catch(e => console.error(e))
      })

    // Update a Calendar reminder
    app.put('/api/calendar/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
      Calendar.findByIdAndUpdate(req.params.id, { $set: req.body })
        .then(() => res.sendStatus(200))
        .catch(e => console.log(e))
    })

    // Delete a Calendar reminder   
    app.delete('/api/calendar/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
      Calendar.findByIdAndRemove(req.params.id)
        .then(() => res.sendStatus(200))
        .catch(e => console.log(e))
    })
}