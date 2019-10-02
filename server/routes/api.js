const express = require('express');
const router = express.Router();
const { mongoose } = require('../db');
const User = require('../models/user');
const Admin = require('../models/admin');
const jwt = require('jsonwebtoken')
var validator = require("email-validator");

function verifyToken(req, res, next) {
  if(!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') {
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload) {
    return res.status(401).send('Unauthorized request')    
  }
  req.userId = payload.subject
  next()
}


router.post('/adminlogin', (req, res) => {
  let adminData = req.body
  Admin.findOne({email: userData.email}, (err, user) => {
    if (err) {
      console.log(err)    
    } else {
      if (!user) {
        res.status(401).send('Invalid Email')
      } else 
      if ( user.password !== adminData.password) {
        res.status(401).send('Invalid Password')
      } else {
        let payload = {subject: user._id}
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({token})
      }
    }
  })
})


router.post('/register', (req, res) => {
  let userData = req.body
  let user = new User(userData)
  // if(userData.email == validator.validate("test@email.com"))
  console.log(validator.validate(userData.email));
  
  user.save((err, registeredUser) => {
    if (err) {
      console.log(err)      
    } else {
      let payload = {subject: registeredUser._id}
      let token = jwt.sign(payload, 'secretKey')
      res.status(200).send({token})
    }
  })
})

router.post('/login', (req, res) => {
  let userData = req.body
  User.findOne({email: userData.email}, (err, user) => {
    if (err) {
      console.log("Invalid User")    
    } else {
      if (!user) {
        res.send('Invalid Email')
      } else 
      if ( user.password !== userData.password) {
        res.send('Invalid Password')
      } else {
        let payload = {subject: user._id}
        let token = jwt.sign(payload, 'secretKey')
        res.send({token, user})
      }
    }
  })
})

router.get('/login', (req, res) => {
  User.find((err,docs)=>{
    if(!err){
        res.send(docs);
    }else{
        console.log("invalid");
    }
  })
})


module.exports = router;