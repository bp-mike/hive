const mongoose = require('mongoose');

/*__________admin registration schema_____________*/ 
const PurchaseSchema = new mongoose.Schema({
  customer_name:String,
  phone_number:String,
  email:String,
  nin:String,
  referee_number:String,
  location:String,

  item_name:String,
  item_serialnumber:String,
  initial_pay:String,
  date:String,
  next_payment_date:String,
  next_instalment:String,
  purchase_receipt:String
  
});
module.exports = mongoose.model('Purchase', PurchaseSchema)
