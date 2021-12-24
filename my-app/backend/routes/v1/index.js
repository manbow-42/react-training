const express = require('express');
const router  = express.Router();

router.use('/matrix', require('./matrix.js'))
router.use('/user', require('./user.js'))
router.use('/backColor', require('./backColor.js'))

module.exports = router;