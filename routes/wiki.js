const express = require('express');
const router = express.Router();
// const body_parser = require('body-parser')

router.get('/', function(req, res, next) {
  //res.send('got to GET /wiki/');
  res.redirect('/')
});

router.post('/', function(req, res, next) {
  res.json(req.body); 
  res.send('got to POST /wiki/');
  
});

router.get('/add', function(req, res, next) {
  res.render('addpage');
  
});

//router.use(body_parser.json());

module.exports = {router:router}
