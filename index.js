// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const layouts = require('./routes/layouts')
 // instantiations
const app = express();


// configurations
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'pug');
app.set('views', './views');
app.use('/static',express.static('public'));
app.use('/',layouts )

// middlreware

// app.use('/home', (req, res,next) =>{
//   console.log('A new request received at ' + Date.now());
// });

// Routes
// app.get('/',(req,res) =>{
//   res.send('people are awesome')
// });
app.get('/home', (req, res) =>{
  res.render('two')
})

// dash board..
app.get('/dash',(req,res) =>{
  res.sendFile('layouts/admins/dash.html')
});

app.get('*',(req,res) =>{
  res.render('layouts/error_page')
})

app.listen(3000)

