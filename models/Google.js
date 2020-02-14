module.exports = (model, Schema) => {

    const Google = new Schema({
        title: String
    })
    return model('Google', Google)
}