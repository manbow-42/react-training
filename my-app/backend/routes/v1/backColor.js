const express     = require('express')
const router      = express.Router()
const BackColorModel = require('../../models/backColorModel')

router.get('/',function(req, res){
  BackColorModel
  .find()
  .then(function(backColor){
    res.json(backColor)
  })
})

router.post('/', function(req, res){
  const BackColor = new BackColorModel()

  BackColor.color = req.body.color

  BackColor.save(function(err){
    if (err) {
      res.send(err)
    } else {
      res.json({ message: "背景色をPOST成功" })
    }
  })
})

router.put('/:id', function(req, res) {
  const BackColorId = req.params.id

  BackColorModel
    .findById(BackColorId, function(err, backColor) {
      if (err) {
        res.send(err)
      } else {
        backColor.color = req.body.color

        backColor.save(function(err) {
          if (err) {
            res.send(err)
          } else {
            res.json({ message: "背景色をPUT成功" })
          }
        })
      }
    })
})

router.delete('/:id', function(req, res) {
  const BackColorId = req.params.id

  BackColorModel.remove({_id : BackColorId})
    .then(function() {
      res.json({ message: "背景色をDELETE成功" })
    })
})

module.exports = router