  module.exports = (model, Schema) => {

  const Jobs = new Schema({
    companyName: String,
    // contactName: String,
    // contactEmail: String,
    // contactPhone: String,
    // contactType: String,
    jobTitle: String,
    date: String,
    checked: Boolean,
    skills: [{ type: String }],
    connections: [{ type: Schema.Types.ObjectId, ref: 'Connections'}],
    archived: Boolean
  })

    return model('Jobs', Jobs)
  }