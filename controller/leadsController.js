const { Leads } = require('../models')
const indeed = require('indeed-scraper')

const queryOptions = {
  host: 'www.indeed.com',
  query: 'Retail',
  city: 'Seattle, WA',
  radius: '25',
  level: 'entry_level',
  jobType: 'fulltime',
  maxAge: '7',
  sort: 'date',
  limit: 100
};


module.exports = {
  scrape(){
    indeed.query(queryOptions)
    .then(res => {
      // console.log(res); // An array of Job objects
        // console.log(res)
      for(let i=0; i<5; i++) {
        // console.log('done')
        Leads.create({
          company: `${res[i].company}`,
          title: `${res[i].title}`,
          url: `${res[i].url}`,
          salary: `${res[i].salary}`,
          summary: `${res[i].summary}`,
          location: `${res[i].location}`,
          datePosted: `${res[i].postDate}`
        })
      }
    })
    .catch(e => console.log(e))
  }
}