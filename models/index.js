var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:3000/wikistack');
const express = require('express');

var Page = db.define('page', {
    title: {
      type: Sequelize.STRING
    }
    urlTitle: Sequelize.TEXT,
    content: Sequelize.TEXT,
    status: Sequelize.BOOLEAN
  })

var User = db.define('users' , {
  name: Sequelize.STRING,
  email: Sequelize.STRING
})

module.exports = {
    Sequelize: Sequelize,
    db: db
}
