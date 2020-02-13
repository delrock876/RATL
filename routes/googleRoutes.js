const { User } = require('../models')


module.exports = app => {

    const company = 'Google'
    const key = 'AIzaSyCXCpFK0tyw35rhlBOKLmVDFdFlq916_t8'
    const limit = '1'

    app.get('/api/google/:company', (req, res) => {
        axios.get(`https://kgsearch.googleapis.com/v1/entities:search?query=${req.params.company}&key=${key}&limit=${limit}&indent=True`)
     
    })

 
}
