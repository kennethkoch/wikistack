const express = require('express');
const router = express.Router();
router.get('/', function(req, res, next) {
  res.send('got to GET /wiki/');
});

router.post('/', function(req, res, next) {
  res.send('got to POST /wiki/');
});

router.get('/add', function(req, res, next) {
  // res.send('wtf')
  res.render('addpage');
});

module.exports = {router:router}
