const { Connections, Jobs } = require('../models')

module.exports = app => {

  // Get all Connections
  app.get('/api/connections', (req, res) => {
    Connections.find()
      .populate('parent')
      .then(connections => res.json(connections))
      .catch(e => console.log(e))
  })

  //Post one Connection
  app.post('/api/connections', (req, res) => {
    Connections.create(req.body)
      .then(({ _id }) => {
        Jobs.updateOne({
          _id: req.body.parent
          }, {
            $push: {
              connections: _id
          }
        })
        .then(() => res.sendStatus(200))
        .catch(e => console.log(e))
      })
      .catch(e => console.log(e))
  })

  //Update one Connection
  app.put('/api/connections/:id', (req, res) => {
    Connections.findByIdAndUpdate(req.params.id, { $set: req.body })
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))
  })


  //Delete one Connection
  app.delete('/api/connections/:id', (req, res) => {
    Connections.findByIdAndRemove(req.params.id)
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}