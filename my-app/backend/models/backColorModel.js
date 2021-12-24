const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const BackColorSchema = new Schema({
  color: String
})

module.exports = mongoose.model('BackColorModel', BackColorSchema)