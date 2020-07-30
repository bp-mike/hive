const express =  require('express');

const router = express.Router();

//_________ bringing in the models
const AdminRegistration = require('../models/agent_registration');

router.get('/', (req, res)=>{
    res.render('admins/dash')
  })

//_________ posting data to the db
router.post('/register', async (req, res) =>{
        const registration = new AdminRegistration(req.body);
        try{
          await registration.save()
          res.redirect('agents')
        }catch (err) {
          res.send("Sorry! Something went wrong.");
          console.log(err)
       }
    })


//______________ retriving data from the db
 router.get('/agents', (req, res)=>{
    AdminRegistration.find({}, (err, agents)=>{
        if(err){
            console.log(err)
        }else{
            
            res.render('admins/users_Agents',{
                me: 'nze',
                agents:agents
            })
        }
    })
 })

//_______________ delete data 
router.post("/delete", async (req, res) => {
  
  try {
    await AdminRegistration.deleteOne({_id: req.body.id })
    res.redirect('back')
  } catch (error) {
     res.status(400).send("unable to delete to database");
  }
})
//_______________ update data
// router.post('/update', async (req, res) =>{
//   const registration = new AdminRegistration(req.body);
//   try{
//     await registration.update()
//     res.redirect('agents')
//   }catch (err) {
//     res.send("Sorry! Something went wrong.");
//     console.log(err)
//  }
// })

//  router.post('/register', async (req, res) =>{
// //     // console.log(req.body);
//     const registration = new adminRegistration(req.body);
//     try{
//       await registration.save()
//       res.send('Thank you for your registration!')
//     }catch (err) {
//       res.send("Sorry! Something went wrong.");
//       console.log(err)
//    }
// })

// router.post('/register',  (req, res) =>{
//         const registration = new adminRegistration(req.body);
//         registration.save((err)=>{
//             if(err){
//                 console.log(err);
//                 return
//             }else{
//                 res.redirect(dash/agents)
//             }
//         })    
//     })

// router.get('/agents', async (req, res) => {
//     try {
//       let items = await Registration.find()
//       // if (req.query.gender) {
//       //   items = await Registration.find({ gender: req.query.gender })
//       // }
//       res.render('admins/dash')
//     } catch (err) {
//       res.status(400).send("unable to find items in the database");
//     }
// });
  

module.exports = router;