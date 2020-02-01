module.exports = app => {
  require('./jobRoutes.js')(app)
  require('./leadsRoutes.js')(app)
  require('./userRoutes')(app)
  require('./scrapeRoutes')(app)
  require('./calendarRoutes')(app)
}