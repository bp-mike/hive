const express = require('express');

const router = express.Router();
const Product =  require('../models/add_products');

// ____________ home page
router.get('/', (req, res)=>{
    res.render('users/index')
  })

// ______________ displaying data on the ui-furniture --
router.get('/furniture', (req, res)=>{
    Product.find({}, (err, products)=>{
        if(err){
            console.log(err)
        }else{          
            res.render('users/furniture',{
                products:products
            })
        }
    })
  })

  // ____________ displaying data on the ui-fitness
  router.get('/fitness', (req, res)=>{
    Product.find({}, (err, products)=>{
        if(err){
            console.log(err)
        }else{          
            res.render('users/fitness',{
                products:products
            })
        }
    })
  })

  // ____________ displaying data on the ui-toys
  router.get('/toys', (req, res)=>{
    Product.find({}, (err, products)=>{
        if(err){
            console.log(err)
        }else{          
            res.render('users/toys',{
                products:products
            })
        }
    })
  })

    // ____________ displaying data on the ui-electronics
router.get('/electronics', (req, res)=>{
  Product.find({}, (err, products)=>{
      if(err){
          console.log(err)
      }else{          
          res.render('users/electronics',{
              products:products
          })
      }
  })
})


  // ___________ view single product
router.get('/product/:id', (req,res)=>{
    Product.findById(req.params.id, (errror, product) =>{
      res.render('users/view_product',{
        
        product:product
      })
    })
  })

module.exports = router;