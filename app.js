'use strict'
const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const body-parser = require('body-parser');
const morgan = require('morgan');
app.use(express.static('public'));

var env = nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
