  module.exports = (model, Schema) => {

  const Jobs = new Schema({
    summary: String,
    companyName: String,
    jobTitle: String,
    date: String,
    status: String,
    archived: Boolean,
    skills: [{ type: String }],
    connections: [{type: Object}],
    userAuth: { type: Schema.Types.ObjectId, ref: 'User' }
  })
    return model('Jobs', Jobs)
  }