var Sequelize = require('sequelize');
const express = require('express');
var db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false
});



var Page = db.define('page', {
  title: { 
    type: Sequelize.STRING, allowNull:false
  },
  urlTitle: {
    type: Sequelize.TEXT, 
    allowNull:false, 
    validate: {
      isURL:true
    }
  },
  content: {
    type: Sequelize.TEXT,
     allowNull: false
    },
  status:{ 
    type: Sequelize.BOOLEAN
  },
  date: {
    type: Sequelize.DATE,
    validate: {
      isDate: true,
    },
    defaultValue: Sequelize.NOW
  }

});

var User = db.define('users' , {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail:true
    }
  }
});

module.exports = {
    db: db,
    Sequelize: Sequelize,
    Page: Page,
    User: User
}
