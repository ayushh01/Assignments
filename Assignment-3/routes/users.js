var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const User = require('../models/user');


router.use(bodyParser.json());

router.get('/', (req, res, next)=> {
  res.send('respond with a resource');
});

router.post('/signup', function(req, res, next) {
  User.findOne({username:req.body.username})
  .then((user)=>{
    if(user != null)
    {
      var err = new Error('User with name' + req.body.username + ' Already Exists ');
      err.status =403;
      next(err);
    }
    else
    {
      User.create({
        username:req.body.username,
        password:req.body.password
      });
    }
  })
  .then((user)=>{
    res.statusCode = 200;
    res.setHeader('Content-type','application/json');
    res.json({status: 'Registration Successfull ',user:user});
  },(err)=>next(err))
  .catch((err)=>next(err));
});

router.post('/login' , (req,res,next)=>{
  if (!req.session.user) {
    var authHeader = req.headers.authorization;
    if (!authHeader) {
        var err = new Error('You are not authenticated!');
        res.setHeader('WWW-Authenticate', 'Basic');                        
        err.status = 401;
        next(err);
        return;
    }
    var auth = new Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
    var user = auth[0];
    var pass = auth[1];

    User.findOne({username: username})
    .then((user)=>{
      if( user ==   null)
      {
        var err = new Error('User not exists');
        res.setHeader('WWW-Authenticate', 'Basic');
        err.status = 403;
        next(err);
      }
      else if(user.password != password)
      {
        var err = new Error('Password is incorrect\n');
        res.setHeader('WWW-Authenticate', 'Basic');
        err.status = 403;
        next(err);
      }
      else if (user.username == username && user.password == password) {
        req.session.user = 'authenticated';
        res.statusCode =200;
        res.setHeader('Content-type','text/plain');
        res.end('You are Authenticated');
        next(); // authorized
      } 
    })
    .catch((err)=>next(err));
  }
  else
  {
    res.statusCode =200;
    res.setHeader('Content-type','text/plain');
    res.end('You are already authenticated');
  }
});


router.get('/logout',(req,res)=>{
  if(req.session)
  {
    req.session.destroy();
    res.clearCookie('session-id');
    res.redirect('/');
  }
  else
  {
    var err = new Error('You are not logged on!');
    err.status =403;
    next(err);
  }
});




module.exports = router;
