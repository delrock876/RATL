
const { Scrape } = require('../controller')

module.exports = app => {

  // Scrape new articles
  app.get('/api/scrape', (req, res) => {
    Scrape.scrape()
      .then(() => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}