module.exports = (model, Schema) => {

  const Connections = new Schema({
    company: String,
    name: String,
    title: String,
    email: String,
    phone: String,
  })

  return model('Connections', Connections)
}