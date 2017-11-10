var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:3000/wikistack');
const express = require('express');

module.exports = {
    Sequelize: Sequelize,
    db: db
}