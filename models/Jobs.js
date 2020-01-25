  module.exports = (model, Schema) => {

  const Jobs = new Schema({
    companyName: String,
    contactName: String,
    contactEmail: String,
    contactPhone: String,
    contactType: String,
    archived: Boolean,
    date: String,
    jobTitle: String,
    skills: [{ type: String }]
  })

    return model('Jobs', Jobs)
  }