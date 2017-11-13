'use strict'
const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const body_parser = require('body-parser');
const morgan = require('morgan');
const PORT = 3000;
const models = require('./models/index')

app.use(express.static('public'));

// console.log(db);
models.db.sync({force: true})
.then(function () {
    // make sure to replace the name below with your express app
    app.listen(3000, function () {
        console.log('Server is listening on port 3000!');
    });
})
.catch(console.error);

var env = nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
