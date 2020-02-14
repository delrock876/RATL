// const { User } = require('../models')


// module.exports = app => {

//     const company = 'Google'
//     const key = 'AIzaSyCXCpFK0tyw35rhlBOKLmVDFdFlq916_t8'

//     app.get('/api/google/:company', (req, res) => {
//         axios.get(`https://kgsearch.googleapis.com/v1/entities:search?query=${company}&key=${key}&limit=1&indent=True`)
//         .then((info)=>res.json(info))
//         .catch(e=>console.error(e))
//     })
// }
