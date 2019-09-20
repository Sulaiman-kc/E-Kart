const express = require('express');
const router = express.Router();
const { mongoose } = require('../db');
const User = require('../models/user');
const jwt = require('jsonwebtoken')

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

// router.post('/addlaptops', verifyToken,(req, res) => {
//   let productData = req.body
//   let product = new Product(productData)
//   product.save((err, registeredUser) => {
//     if (err) {
//       console.log(err)      
//     } else {
//       res.status(200).send(registeredUser)
//     }
//   })
// })

router.post('/adminlogin', (req, res) => {
  let userData = req.body
  User.findOne({email: userData.email}, (err, user) => {
    if (err) {
      console.log(err)    
    } else {
      if (!user) {
        res.status(401).send('Invalid Email')
      } else 
      if ( user.password !== userData.password) {
        res.status(401).send('Invalid Password')
      } else {
        let payload = {subject: user._id}
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({token})
      }
    }
  })
})



module.exports = router;