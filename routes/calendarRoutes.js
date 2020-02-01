const { Calendar } = require('../models')
const passport = require('passport')

module.exports = app => {

    // get all reminders
    app.get('/api/calendar', (req,res) => {
        Calendar.find()
                .then(calendar => res.json(calendar))
                .catch(e => console.error(e))
    })


    // Post a Calendar remider
    app.post('/api/calendar', passport.authenticate('jwt', { session: false }), (req, res) => {

        const { _id: userAuth } = req.user
        const { reminder, date } = req.body
        //creates json with these key value pairs
        Calendar.create({ reminder,date })
          .then(calendar => {
            
            User.updateOne({ _id: userAuth }, { $push: { userCalendar: calendar } })
              .then(() => res.json(calendar))
              .catch(e => console.error(e))
          })
          .catch(e => console.error(e))
      })

    // Update a Calendar reminder
    app.put('/api/calendar/:id', (req,res) => {
        Calendar.findByIdAndUpdate(req.params.id, {$set: req.body})
                .then(() => res.sendStatus(200))
                .catch(e => console.error(e))
    })

    // Delete a Calendar reminder   
    app.delete('/api/calendar/:id', (req,res) => {
        Calendar.findByIdAndRemove(req.params.id)
                .then(() => res.sendStatus(200))
                .catch(e => console.error(e))
    })
}