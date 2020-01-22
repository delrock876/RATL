const { model, Schema } = require('mongoose')

module.exports = {
  Jobs: require('./Jobs.js')(model, Schema),
  User: require('./User.js')(model, Schema),
  Post: require('./Post.js')(model, Schema)
}