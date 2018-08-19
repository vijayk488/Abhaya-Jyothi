
//require express
var express=require('express');
// Require path for accessing path directories
var path=require('path');
//create our own router
var router=express.Router();
//Expose the router to outside to access moduls
module.exports=router;
/* logger
var logger = require('./logger').Logger;

router.use(function timeLog(req, res, next) {
  // this is an example of how you would call our new logging system to log an info message
  logger.info("Test Message");
  next();
});
*/

router.get("/about",function(req,res){
    res.render('pages/about');
});
router.get("/",function(req,res){
    res.render('pages/index');
});
router.get("/home",function(req,res){
    res.render('pages/home');
});

router.get("/contact",function(req,res){
    res.render('pages/contact');
});

