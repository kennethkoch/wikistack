const wikiRouter = require('./wiki').router;
const userRouter = require('./user');

const express = require('express');
const router = express.Router();

router.use('/wiki', wikiRouter);

// const test = () => console.log('hello')

module.exports = {
  router,
  wikiRouter,
  userRouter: userRouter
}
