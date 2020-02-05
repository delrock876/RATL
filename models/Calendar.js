module.exports = (model, Schema) => {

    const Calendar = new Schema({
        reminder: String,
        date: String,
        userCalendar : { type: Schema.Types.ObjectId, ref: 'User'}
    })
    return model('Calendar', Calendar)
}