var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:3000/wikistack');
const express = require('express');

const Project = sequelize.define('project', {
    title: Sequelize.STRING,
    description: Sequelize.TEXT
  })

module.exports = {
    Sequelize: Sequelize,
    db: db
}

