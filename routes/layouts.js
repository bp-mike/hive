// const express = require('express');
// const router = express.Router();
// // const mongoose = require('mongoose');

// const adminRegistration = require('../models/agent_registration');
// var view = "./views/"
// router.get('/', (req, res) =>{
//     res.sendFile('layouts/users/index.html',{root:view})
// })
// //________________dash board..
// router.get('/dash',(req,res) =>{
//     res.sendFile('layouts/admins/dash.html',{root:view})
//   });
//   // router.get('/add_agent',(req,res) =>{
//   //   res.sendFile('layouts/admins/SalesAgent_login.html' ,{root:view})
//   // });
  
// //________________admin
// router.post('/register', async (req, res) =>{
//     // console.log(req.body);
//     const registration = new adminRegistration(req.body);
//     try{
//       await registration.save()
//       // res.send('Thank you for your registration!')
//       res.sendFile('layouts/admins/users_Agents.html',{root:view})
//     }catch (err) {
//       res.send("Sorry! Something went wrong.");
//       console.log(err)
//    }
// })

// router.get('/layouts/admins/users_Agents.html', async (req, res) => {
//   try {
//     let items = await Registration.find()
//     // if (req.query.gender) {
//     //   items = await Registration.find({ gender: req.query.gender })
//     // }
//     res.sendFile('/layouts/admins/users_Agents.html', { users: items })
//   } catch (err) {
//     res.status(400).send("unable to find items in the database");
//   }
// });

// module.exports=router;