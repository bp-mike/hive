const express =  require('express');
const router = express.Router();
const multer = require('multer');

//__________ multer config 
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
// ___________ end of multer config

//_________ bringing in the models
const AdminRegistration = require('../models/agent_registration');
const Product =  require('../models/add_products');
const Purchase =  require('../models/purchases');

// __________ init multer
// ___________ layouts
router.get('/layout', (req,res)=>{
  res.render('admins/layout')
})
// ______ products
router.get('/pdts_layout', (req,res)=>{
  res.render('admins/pdts_layout')
})
// ______ purchases
router.get('/purchase_layout', (req,res)=>{
  res.render('admins/purchase_layout')
})

// _________ splash
router.get('/', (req, res)=>{
    res.render('admins/splash')
  })
// ________ dashboard
// router.get('/dashboard', (req, res)=>{
// AdminRegistration.find({}, (err, agents,purchases)=>{
//   if(err){
//       console.log(err)
//   }else{
      
//       res.render('admins/dash',{
//           agents:agents,          
//       })
//   }
// })
// })
// router.get('/', async (req, res)=>{
//   try{
//     let items = await Purchase.find();
//     let agents = await AdminRegistration.find()
//     if(req.query.name){
//       items = await Purchase.find({name:req.query.name});
//     }res.render('admins/dash',{
//       products : items,
//       agents:agents
//     });
//   }catch(err){
//     res.status(400).send("unable to find items in the db")
//   }
// })


// __________ dashboard purchase
router.get('/dashboard', (req, res)=>{
  Purchase.find({}, (err, purchases)=>{
    if(err){
        console.log(err)
    }else{          
        res.render('admins/dash',{
          purchases:purchases
        })
    }
  }) 
})

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
//

//__________ view single agent
router.get('/agent/:id', (req,res)=>{
  AdminRegistration.findById(req.params.id, (errror, agent) =>{
    res.render('admins/view_agent',{
      
      agent:agent
    })
  })
})

// ___________ view single product
router.get('/product/:id', (req,res)=>{
  Product.findById(req.params.id, (errror, product) =>{
    res.render('admins/view_product',{      
      product:product
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

// _____________ Goes to edit single product page
router.get('/edit_pdt/:id', (req,res)=>{
  Product.findById(req.params.id, (errror, product) =>{
    res.render('admins/edit_pdt',{
      product:product
    })
  })
})

//__________ update the agent(update action)
router.post('/agent/:id', async (req, res) =>{  
  let query ={_id:req.params.id}
  try{
    await AdminRegistration.update(query, req.body)
    res.redirect('back')
  }catch (err) {
    res.send("Sorry! Something went wrong.");
    console.log(err)
 }
})
// ___________ updte the product
router.post('/product/:id', async (req, res) =>{  
  let query ={_id:req.params.id}
  try{
    await Product.update(query, req.body)
    res.redirect('back')
  }catch (err) {
    res.send("Sorry! Something went wrong.");
    console.log(err)
 }
})

// _______________ purchases
router.get('/purchases', (req, res)=>{
  Purchase.find({}, (err, purchases)=>{
    if(err){
        console.log(err)
    }else{          
        res.render('admins/purchases',{
          purchases:purchases
        })
    }
  }) 
})

//__________ view single purchase records
router.get('/purchase/:id', (req,res)=>{
  Purchase.findById(req.params.id, (error, purchase) =>{
    res.render('admins/view_purchase',{
      purchase:purchase
    })
  })
})

//_______________ delete purhase data 
// router.post("/delete_purchase", async (req, res) =>{  
//   try {
//     await Purchase.deleteOne({_id: req.body.id })
//     res.redirect('back')
//   } catch (error) {
//      res.status(400).send("unable to delete to database");
//   }
// })

module.exports = router;