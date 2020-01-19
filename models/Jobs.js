module.exports = (model, Schema) => {

  const Jobs = new Schema({
    company: String,
    contactName: String,
    email: String,
    phone: String,
    archiveStatus: Boolean
  })

  return model('Jobs', Jobs)
}