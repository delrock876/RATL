module.exports = (model, Schema) => {
    const Post = new Schema ({
        title: String,
        body: String,
        author: { type: Schema.Types.ObjectId, ref: 'User'}
    })

    return model('Post', Post)
}