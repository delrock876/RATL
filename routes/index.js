module.exports = app => {
  require('./jobRoutes.js')(app)
  require('./leadsRoutes.js')(app)
  require('./userRoutes')(app)
  require('./scrapeRoutes')(app)
  require('./connectionsRoutes')(app)
  require('./calendarRoutes')(app)
}