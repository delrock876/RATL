module.exports = (model, Schema) => {

  const Leads = new Schema({
    company: String,
    title: String,
    url: String,
    salary: String,
    summary: String,
    location: String,
    postDate: String,
  })

  return model('Leads', Leads)
}