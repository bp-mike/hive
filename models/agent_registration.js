const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

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
      unique:true,
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

// adminRegistrationSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('adminRegistration', adminRegistrationSchema);


