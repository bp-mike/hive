const express = require('express');

const router = express.Router();
const Product =  require('../models/add_products');

// ____________ home page
router.get('/', (req, res)=>{
    res.render('users/index')
  })

// ______________ displaying data on the ui
router.get('/products', (req, res)=>{
    Product.find({}, (err, products)=>{
        if(err){
            console.log(err)
        }else{          
            res.render('users/products',{
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