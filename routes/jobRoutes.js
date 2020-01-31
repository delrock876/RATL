const { Jobs, User } = require('../models')
const passport = require('passport')

module.exports = app => {

  // Get all Jobs
  app.get('/api/jobs', passport.authenticate('jwt', { session: false }), (req, res) => {
    Jobs.find()
      .populate('connections')
      .then(jobs => res.json(jobs))
      .catch(e => console.log(e))
  })

  //Post one Job
  app.post('/api/jobs', passport.authenticate('jwt', { session: false }), (req, res) => {

    const { _id: userAuth } = req.user
    const { companyName, jobTitle, date, checked, archived, skills, connections } = req.body
    //creates json with these key value pairs
    Jobs.create({companyName, jobTitle, date, checked, archived, skills, connections, userAuth})
      .then(jobs => {
        
        User.updateOne({ _id: userAuth }, { $push: { userJobs: jobs } })
          .then(() => res.json(jobs))
          .catch(e => console.error(e))
      })
      .catch(e => console.error(e))
  })

  //Update one Job
  app.put('/api/jobs/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Jobs.findByIdAndUpdate(req.params.id, { $set: req.body })
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))
  })


  //Delete one Job
  app.delete('/api/jobs/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    Jobs.findByIdAndRemove(req.params.id)
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}