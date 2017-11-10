'use strict'
const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const body_parser = require('body-parser');
const morgan = require('morgan');
const PORT = 3000;
const db = require('./models/index')

app.use(express.static('public'));

app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}.`)
});

var env = nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
