module.exports = (model, Schema) => {

  const Leads = new Schema({
    company: String,
    title: String,
    url: String,
    salary: String,
    summary: String,
    location: String,
    postDate: String,
    archived: Boolean
  })

  return model('Leads', Leads)
}