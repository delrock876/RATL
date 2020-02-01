const { Calendar } = require('../models')

module.exports = app => {

    // get all reminders
    app.get('/api/calendar', (req,res) => {
        Calendar.find()
                // .populate('parent')
                .then(calendar => res.json(calendar))
                .catch(e => console.error(e))
    })


    // Post a Calendar remider
    app.post('/api/calendar', (req,res) => {
        Calendar.create(req.body)
                .then(calendar => res.json(calendar))
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