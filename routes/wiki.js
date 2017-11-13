const express = require('express');
const router = express.Router();
const body_parser = require('body-parser')

router.get('/', function(req, res, next) {
  //res.send('got to GET /wiki/');
  res.redirect('/')
});

router.post('/', function(req, res, next) {
  res.send('got to POST /wiki/');
});

router.get('/add', function(req, res, next) {
  res.render('addpage');
  console.log(req.body);
});


module.exports = {router:router}
