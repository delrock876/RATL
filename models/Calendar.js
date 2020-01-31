module.exports = (model, Schema) => {

    const Calendar = new Schema({
        reminder: String,
        date: String
    })
    return model('Calendar', Calendar)
}