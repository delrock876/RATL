module.exports = (model, Schema) => {

  const Jobs = new Schema({
    company: String,
    contactName: String,
    contactEmail: String,
    contactPhone: String,
    contactType: String,
    archived: Boolean,
    date: String,
    jobTitle: String,
    skills: String
  })

  return model('Jobs', Jobs)
}