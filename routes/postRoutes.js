const { Post, User } = require('../models')
const passport = require('passport')

module.exports = app => {

    app.get('/posts', passport.authenticate('jwt', {session:false}), (req,res) => {
        Post.find()
            .populate('author')
            .then(posts => res.json(posts))
            .catch(e => console.error(e))
    })

    app.post('/posts', passport.authenticate('jwt', { session: false}), (req,res) => {
        const { _id: author } = req.user
        const { title, body } = req.body

        Post.create({ title, body, author })
            .then(post => {
             User.updateOne({ _id: author}, { $push: { posts: post} }) 
             .then(() => res.sendStatus(200))  
             .catch(e => console.error(e))
         })
            .catch( e => console.error(e))
    })
}