module.exports = (model, Schema) => {

    const Calendar = new Schema({
        reminder: [{type:String}],
        date: [{type: Object}],
        userCalendar : { type: Schema.Types.ObjectId, ref: 'User'}
    })
    return model('Calendar', Calendar)
}