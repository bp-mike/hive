const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');

const adminRegistration = require('../models/agent_registration');
var view = "./views/"
router.get('/', (req, res) =>{
    res.sendFile('layouts/users/index.html',{root:view})
})
//________________dash board..
router.get('/dash',(req,res) =>{
    res.sendFile('layouts/admins/dash.html',{root:view})
  });
  // router.get('/add_agent',(req,res) =>{
  //   res.sendFile('layouts/admins/SalesAgent_login.html' ,{root:view})
  // });
  
// 
router.post('/register', (req, res) =>{
    // console.log(req.body);
    const registration = new adminRegistration(req.body);
    registration.save()
      .then(() => { res.send('Thank you for your registration!'); })
      .catch((err) => {
        console.log(err);
        res.send('Sorry! Something went wrong.');
      });
})

module.exports=router;