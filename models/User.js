module.exports = (model, Schema) => {
    const User = new Schema ({
        name: String,
        email: String,
        username: String,
        userJobs: [{ type: Schema.Types.ObjectId, ref: 'Jobs' }]
    })

    User.plugin(require('passport-local-mongoose'))

    return model('User', User)
}