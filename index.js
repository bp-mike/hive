// dependencies
const express = require('express');
const bodyParser = require('body-parser');
// instantiations
const app = express();


// configurations
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'pug');
app.set('views', './views');
app.use('/static',express.static('public'));

// middlreware

// app.use('/home', (req, res,next) =>{
//   console.log('A new request received at ' + Date.now());
// });
// Routes
app.get('/',(req,res) =>{
  res.send('people are awesome')
});
app.get('/home', (req, res) =>{
  res.render('two')
})

// dash board..
app.get('/dash',(req,res) =>{
  res.render('layouts/admins/dash_layout')
});
app.get('/ui', (req, res) =>{
  res.render('layouts/users/ui-layout');
});

app.get('*',(req,res) =>{
  // res.send('404! This is na invalid url.')
  res.render('layouts/error_page')
})

// bootstrapping server
app.listen(3000, ()=>{
  console.log('listening to port 3k');
})
