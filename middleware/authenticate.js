const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy

const Agents = require('./models/agent_registration');
const passport = require('passport');
// const agent_registration = require('../models/agent_registration');

module.exports = (passport)=>{
    passport.use(new LocalStrategy((username, password, done)=>{
        let query = {
            username:username
        }
        Agents.findOne(query, (err, user)=>{
            if(err){
                console.log(err)
            } 
            if(!user){
                return done(null,false,{message:"invalid user"})
            }
            bcrypt.compare(password,user.password,(err, isMatch)=>{
                if(err){
                    console.log(err)
                }
                if(isMatch){
                    return done(null,user)
                }else{
                    return done(null, false,{message:"invalid password"})
                }
            })
        })
    }))
    passport.serializeUser((user, done)=>{
        done(null, user.id)
    });
    passport.deserializeUser((id, done)=>{
        User.findById(id, (err, user)=>{
            done(err, user);
        });
    });

}
