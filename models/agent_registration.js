const mongoose = require('mongoose');

/*__________admin registration schema_____________*/ 
const adminRegistrationSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required:'please enter your first name',
        trim:true
        },
    lastname:{
      type: String,
      unique:false,
      required:'please enter your first name',
      trim:true
    },
    username:{
      type: String,
      unique:false,
      required:'please enter your first name',
      trim:true
    },
    email:{
        type: String,
        unique:false,
        required:'please enter your first name',
        trim:true
    },
    password: {
      type:String,
      required:'please enter password',
      trim:true
    },
    gender: String,
    nin:String,
    address:String,
    city:String
});

/*______________end of admin registration schema_________*/ 


/*______________login schema_________*/ 


/*______________ end of login schema_________*/ 

module.exports = mongoose.model('adminRegistration', adminRegistrationSchema)
