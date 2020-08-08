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
const Purchase =  require('../models/purchases');
//__________ our layout
router.get('/layout', (req,res)=>{
  res.render('agents/layout')
})

//_________ record purchase to the db
router.post('/record', upload.single('image'), async (req, res) =>{
        const purchase = new Purchase(req.body);
        try{
          await purchase.save()
          res.redirect('back')
          res.send('people are awesome')
        }catch (err) {
          res.send("Sorry! Something went wrong.");
          console.log(err)
       }
    })

//  __________ retriving purchase records from the db
router.get('/', (req, res)=>{
  Purchase.find({}, (err, purchases)=>{
      if(err){
          console.log(err)
      }else{          
          res.render('agents/agent',{
            purchases:purchases
          })
      }
  })
})

//_______________ delete data 
router.post("/delete", async (req, res) =>{
  
  try {
    await Purchase.deleteOne({_id: req.body.id })
    res.redirect('back')
  } catch (error) {
     res.status(400).send("unable to delete to database");
  }
})

//__________ view single purchase
router.get('/purchase/:id', (req,res)=>{
  Purchase.findById(req.params.id, (error, purchase) =>{
    res.render('agents/view_purchase',{//create this view
      purchase:purchase
    })
  })
})

//__________ Goes to edit single purchase page
router.get('/edit/:id', (req,res)=>{
  Purchase.findById(req.params.id, (errror, purchase) =>{
    res.render('agents/edit_purchase',{
      purchase:purchase
    })
  })
})

// ___________ updte the purchase
router.post('/purchase/:id', async (req, res) =>{  
  let query ={_id:req.params.id}
  try{
    await Purchase.update(query, req.body)
    res.redirect('back')
  }catch (err) {
    res.send("Sorry! Something went wrong.");
    console.log(err)
 }
})

module.exports = router;