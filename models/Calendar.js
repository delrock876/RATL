module.exports = (model, Schema) => {

    const Calendar = new Schema({
        reminder: [{type:String}],
        date: [{type: Object}],
        user : { type: Schema.Types.ObjectId, ref: 'User'}
    })
    return model('Calendar', Calendar)
}