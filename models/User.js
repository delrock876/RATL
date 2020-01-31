module.exports = (model, Schema) => {
    const User = new Schema ({
        name: String,
        email: String,
        username: String,
        userJobs: [{ type: Schema.Types.ObjectId, ref: 'Jobs' }],
        calendar: [{type: Schema.Types.ObjectId, ref: 'Calendar'}]
    })

    User.plugin(require('passport-local-mongoose'))

    return model('User', User)
}