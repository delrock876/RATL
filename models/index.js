const { model, Schema } = require('mongoose')

module.exports = {
  Jobs: require('./Jobs.js')(model, Schema),
  User: require('./User.js')(model, Schema),
  Leads: require('./Leads.js')(model, Schema),
  Connections: require('./Connections.js')(model, Schema),
}