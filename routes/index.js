const wikiRouter = require('./wiki').router;
const userRouter = require('./user');

const express = require('express');
const router = express.Router();

router.use('/wiki', wikiRouter);

// const test = () => console.log('hello')
router.get("/", (req,res)=>{
  res.render('index');
})

module.exports = {
  router,
  wikiRouter,
  userRouter: userRouter
}
