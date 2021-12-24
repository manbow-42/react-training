const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const UserSchema = new Schema({
  shape: String,
  color: String
})

module.exports = mongoose.model('UserModel', UserSchema)