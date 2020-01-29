const { Jobs } = require('../models')

module.exports = app => {

  // Get all Jobs
  app.get('/api/jobs', (req, res) => {
    Jobs.find()
    .populate('connections')
    .then(jobs => res.json(jobs))
    .catch(e => console.log(e))
  })

  //Post one Job
  app.post('/api/jobs', (req, res) => {
    Jobs.create(req.body)
    .then(jobs => res.json(jobs))
    .catch(e => console.log(e))
  })

  //Update one Job
  app.put('/api/jobs/:id', (req, res) => {
    Jobs.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(() => res.sendStatus(200))
    .catch(e => console.log(e))
  })


  //Delete one Job
  app.delete('/api/jobs/:id', (req, res) => {
    Jobs.findByIdAndRemove(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(e => console.log(e))
  })
}