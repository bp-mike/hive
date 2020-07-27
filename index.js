//_______________dependencies
const express = require('express');
const bodyParser = require('body-parser');
const layouts = require('./routes/layouts');
const mongoose = require('mongoose');
require('dotenv').config();
require('./models/agent_registration');
const passport = require('passport');
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});

const path = require('path');

//_____________instantiations
const app = express();

var view = "./views/"
//______________configurations
app.set('view engine', 'pug');
app.set('views', './views');

/*___________db___________*/

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true},() =>{
  // console.log('finally ive connected u db')
});
mongoose.connection
.on('open', () => {
  console.log('Mongoose connection open');
})
.on('error', (err) => {
  console.log(`Connection error: ${err.message}`);
});
/*_________end of db________*/

//_______________middlreware
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

//________________static files
// app.use('/static',express.static('public'));
app.use(express.static(path.join(__dirname, "")));

  //_________________routes
  app.use('/home',layouts )

  // app.post('/register', (req, res) =>{
  //   res.send('people are awesome')
  //   console.log(req.body);
  // })


//______________error page.
app.get('*',(req,res) =>{
  res.render('layouts/error_page')
})

app.listen(3000)

