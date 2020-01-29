module.exports = (model, Schema) => {

  const Connections = new Schema({
    name: String,
    title: String,
    email: String,
    phone: String,
    parent: { type: Schema.Types.ObjectId, ref: 'Jobs'}
  })

  return model('Connections', Connections)
}