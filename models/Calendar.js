module.exports = (model, Schema) => {

    const Calendar = new Schema({
        title: String,
        date: String,
        userCalendar : { type: Schema.Types.ObjectId, ref: 'User'}
    })
    return model('Calendar', Calendar)
}