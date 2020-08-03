const express =  require('express');
const router = express.Router();
const multer = require('multer');

const storage =multer.diskStorage({
  destination: function(req, file ,cb){
    cb(null, './uploads');
  },
  filename: function(req, file, cb){
    cb(null, file.originalname)
  }
})
const filter = (req, file, cb)=>{
  if(file.mimetype ==='image/jpeg' || file.mimetype === 'image/png'){
    cb(null,true)
  }else{
    cb(null, false)
  }
}
const upload = multer({
  storage:storage,
  limits:{
    fileSize: 1024 * 1024 *10
  },
  fileFilter : filter
});
//_________ bringing in the models
const AdminRegistration = require('../models/agent_registration');
const Product =  require('../models/add_products');

// __________ init multer

router.get('/', (req, res)=>{
    res.render('admins/dash')
  })


router.get('/layout', (req,res)=>{
  res.render('admins/layout')
})

router.get('/pdts_layout', (req,res)=>{
  res.render('admins/pdts_layout')
})

// _______ products page

//_________ posting agent to the db
// router.post('/register', async (req, res) =>{
//         const registration = new AdminRegistration(req.body);
//         try{
//           await registration.save()
//           res.redirect('agents')
//         }catch (err) {
//           res.send("Sorry! Something went wrong.");
//           console.log(err)
//        }
//     })

//_________ posting agent to the db
    router.post("/register", async (req, res) => {
      try {
        const agents = new AdminRegistration(req.body);
        await AdminRegistration.register(agents, req.body.password, (err) => {
          if (err) { throw err }
          res.redirect('agents')
        })
      } catch (err) {
         res.status(400).send('Sorry! Something went wrong.')
         console.log(err)
      }
    })
    

// _____ posting a product to the db
// _____ add other categories
// ______ posting furniture
// _______ posting toys
// ________ posting fitness
// ________- posting electronics
// _______ others
router.post('/add_product', upload.single('image'), async (req, res) =>{
        const add_pdt = new Product(req.body);
        try{
          await add_pdt.save()
          res.redirect('products')
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

//  __________ retriving products from the db
router.get('/products', (req, res)=>{
  Product.find({}, (err, products)=>{
      if(err){
          console.log(err)
      }else{
          
          res.render('admins/products',{
              products:products
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

// ___________ delete product
router.post("/del_pdt", async (req, res) => {
  
  try {
    await Product.deleteOne({_id: req.body.id })
    res.redirect('back')
  } catch (error) {
     res.status(400).send("unable to delete to database");
  }
})

// ________ remeber to move this route to the bottom
// router.get('/products', (req,res)=>{
//   res.render('admins/products')
// })

//__________ view single agent
router.get('/agent/:id', (req,res)=>{
  AdminRegistration.findById(req.params.id, (errror, agent) =>{
    res.render('admins/view_agent',{
      
      agent:agent
    })
  })
})

//__________ Goes to edit single agent page
router.get('/edit/:id', (req,res)=>{
  AdminRegistration.findById(req.params.id, (errror, agent) =>{
    res.render('admins/edit_agent',{
      agent:agent
    })
  })
})

//__________ update the agent
// ! ill be back
router.post('/agent/:id', async (req, res) =>{
  let agent = req.body
  
  let query ={_id:req.params.id}
  try{
    await AdminRegistration.update()
    res.redirect('edit')
  }catch (err) {
    res.send("Sorry! Something went wrong.");
    console.log(err)
 }
    // AdminRegistration.update(query, agent, (err)=>{
    //   if(err){
    //     console.log(err)
    //     return;
    //   }else{
    //     res.render('/',{
    //       agents:agent
    //     })
    //   }
    // })
})


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