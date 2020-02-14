module.exports = app => {
  require('./jobRoutes.js')(app)
  require('./leadsRoutes.js')(app)
  require('./userRoutes')(app)
  require('./calendarRoutes')(app)
  require('./htmlRoutes')(app)
}