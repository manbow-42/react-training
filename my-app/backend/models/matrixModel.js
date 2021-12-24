const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const MatrixSchema = new Schema({
  lines: Number
})

module.exports = mongoose.model('MatrixModel', MatrixSchema)