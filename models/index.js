var Sequelize = require('sequelize');
const express = require('express');
var db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false
});



var Page = db.define('page', {
  title: {
    type: Sequelize.STRING
  },
  urlTitle: Sequelize.TEXT,
  content: Sequelize.TEXT,
  status: Sequelize.BOOLEAN
});

var User = db.define('users' , {
  name: Sequelize.STRING,
  email: Sequelize.STRING
});

module.exports = {
    db: db,
    Sequelize: Sequelize,
    Page: Page,
    User: User
}
