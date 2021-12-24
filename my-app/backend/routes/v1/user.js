const express   = require('express')
const router    = express.Router()
const UserModel = require('../../models/userModel.js')

router.get('/', function(req, res){
  UserModel
  .find()
  .then(function (users){
    res.json(users)
  })
})

router.get('/:id', function(req, res){
  const UserId = req.params.id

  UserModel
  .findById(UserId, function(err, user) {
    res.json(user)
  })
})

router.post('/', function(req, res){
  const User = new UserModel()

  User.shape = req.body.shape
  User.color = req.body.color

  User.save(function(err) {
    if (err) {
      res.send(err)
    } else {
      res.json({ message: "ユーザーPOST成功" })
    }
  })
})

router.put('/:id', function(req, res) {
  const UserId = req.params.id

  UserModel
    .findById(UserId, function(err, user) {
      if (err) {
        res.send(err)
      } else {
        user.shape = req.body.shape
        user.color = req.body.color

        user.save(function(err) {
          if (err) {
            res.send(err)
          } else {
            res.json({ message: "ユーザーPUT成功" })
          }
        })
      }
    })
})

router.delete('/:id', function(req, res) {
  const UserId = req.params.id

  UserModel.remove({_id : UserId})
    .then(function() {
      res.json({ message: "ユーザーDELETE成功" })
    })
})

module.exports = router