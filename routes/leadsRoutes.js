const { Leads } = require('../models')

module.exports = app => {

  // Get all Leads
  app.get('/leads', (req, res) => {
    Leads.find({})
      .then(leads => res.json(leads))
      .catch(e => console.log(e))
  })

  //Post one Leads
  app.post('/leads', (req, res) => {
    Leads.create(req.body)
      .then(leads => res.json(leads))
      .catch(e => console.log(e))
  })

  //Update one Leads
  app.put('/leads/:id', (req, res) => {
    Leads.findByIdAndUpdate(req.params.id, { $set: req.body })
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))
  })


  //Delete one Leads
  app.delete('/leads/:id', (req, res) => {
    Leads.findByIdAndRemove(req.params.id)
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}