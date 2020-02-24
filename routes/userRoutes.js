const { User } = require ('../models')
const jwt = require('jsonwebtoken')

module.exports = app => {

    //Register a User
    app.post('/api/users', (req, res) =>{
        const { name, email, username } = req.body
        User.findOne({username: req.body.username}, (e, user)=>{
            if(e){
                console.log(e)
            }
             if (user){
                res.sendStatus(409)
            }else {
                 User.register(new User({ name, email, username }), req.body.password, e => {
                     if (e) {
                         console.log(e)
                     }
                     res.sendStatus(200)
                 })

            }
        })
        
    })  

    // Login 
    app.post('/api/login', (req,res) => {
        User.authenticate()(req.body.username, req.body.password, (e, user) => {
            if(e) {
                console.log(e)
            }
            if (user) {
                res.json({currentUser: user.name, token: jwt.sign({ id: user._id}, process.env.SECRET)})
            }else {
                res.sendStatus(404)
            }
      })
    })
}