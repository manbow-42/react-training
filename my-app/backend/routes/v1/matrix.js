const express     = require('express')
const router      = express.Router()
const MatrixModel = require('../../models/matrixModel')

router.get('/',function(req, res){
  MatrixModel
  .find()
  .then(function(matrix){
    res.json(matrix)
  })
})

router.post('/', function(req, res){
  const Matrix = new MatrixModel()

  Matrix.lines = req.body.lines

  Matrix.save(function(err){
    if (err) {
      res.send(err)
    } else {
      res.json({ message: "行列の数をPOST成功"})
    }
  })
})

router.put('/:id', function(req, res) {
  const MatrixId = req.params.id

  MatrixModel
    .findById(MatrixId, function(err, matrix) {
      if (err) {
        res.send(err)
      } else {
        matrix.lines = req.body.lines

        matrix.save(function(err) {
          if (err) {
            res.send(err)
          } else {
            res.json({ message: "行列の数をPUT成功" })
          }
        })
      }
    })
})

router.delete('/:id', function(req, res) {
  const MatrixId = req.params.id

  MatrixModel.remove({_id : MatrixId})
    .then(function() {
      res.json({ message: "行列の数をDELETE成功" })
    })
})

module.exports = router