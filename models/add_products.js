const mongoose = require('mongoose');

/*__________admin registration schema_____________*/ 
const AddProductSchema = new mongoose.Schema({
  
  // Image:Image,                              
  product:{
    type:String,
    required:'please enter product name',
    trim:true
  },
  category:String,
  make:String,
  serial_no:String,
  date:Date,
  price:String,
  initial_pay:String,
  Pay_Interval:String,
  stock:String
});
module.exports = mongoose.model('add_product', AddProductSchema)
