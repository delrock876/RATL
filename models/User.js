module.exports = (model, Schema) => {
    const User = new Schema ({
        name: String,
        email: String,
        username: String,
        posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
    })

    User.plugin(require('passport-local-mongoose'))

    return model('User', User)
}