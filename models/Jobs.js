  module.exports = (model, Schema) => {

  const Jobs = new Schema({
    companyName: String,
    jobTitle: String,
    date: String,
    checked: Boolean,
    archived: Boolean,
    skills: [{ type: String }],
    connections: [{ type: Schema.Types.ObjectId, ref: 'Connections'}],
    userAuth: { type: Schema.Types.ObjectId, ref: 'User' }
  })

    return model('Jobs', Jobs)
  }