const { Leads } = require('../models')

module.exports = app => {

  // Get all Jobs
  app.get('/api/leads', (req, res) => {
    Leads.find({})
    .then(leads => res.json(leads))
    .catch(e => console.log(e))
  })

  //Post one Job
  app.post('/api/leads', (req, res) => {
    Leads.create(req.body)
    .then(leads => res.json(leads))
    .catch(e => console.log(e))
  })

  //Update one Job
  app.put('/api/leads/:id', (req, res) => {
    Leads.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(() => res.sendStatus(200))
    .catch(e => console.log(e))
  })


  //Delete one Job
  app.delete('/api/leads/:id', (req, res) => {
    Leads.findByIdAndRemove(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(e => console.log(e))
  })
}