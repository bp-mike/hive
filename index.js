//_______________dependencies
const express = require('express');
const bodyParser = require('body-parser');
// ______________ requiring routes
const layouts = require('./routes/layouts');
const admin_routes = require('./routes/admin_routes');
const agents =  require('./routes/agents_routes');
const user_routes = require('./routes/user_routes');
const login_routes = require('./routes/login_routes')
// ______________ requiring authentication middle ware
// const authenticate = require('./middleware/authenticate')
const mongoose = require('mongoose');
require('dotenv').config();
const AdminRegistration = require('./models/agent_registration');

const expressvalidator = require('express-validator');
const flash = require('connect-flash');

const passport = require('passport');

const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});
const path = require('path');

//_____________init app
const app = express();


// __________ configurations
// __________ view html files
var view = "./views/"
//______________view pug files
app.set('view engine', 'pug');
app.set('views', './views');

/*___________db___________*/
mongoose.connect(process.env.DATABASE, {
   useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  },() =>{
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
app.use(require('connect-flash')());
app.use((req, res, next)=>{
  res.locals.message= require('express-messages')(req, res);
  next();
});

// app.use(expressValidator({
//   errorFormatter : function(param, msg, value){
//     var namespace = param.split('.')
//     , root = namespace.shift()
//     , formparam = root;

//     while(namespace.lenght){
//       formparam += '[' + namespace.shift() + ']';
//     }

//     return{
//       param:formparam,
//       msg : msg,
//       value : value
//     };
//   }
// }))

//________________static files
// app.use('/static',express.static('public'));
app.use(express.static(path.join(__dirname, "")));

  //_______________ use the routes
  app.use('/', user_routes);
  app.use('/dash', admin_routes);
  app.use('/sales_agents', agents);
  app.use('/layouts',layouts );
  app.use('/login', login_routes);

//____ passport strategies
// passport.use(AdminRegistration.createStrategy());
// passport.serializeUser(AdminRegistration.serializeUser());
// passport.deserializeUser(AdminRegistration.deserializeUser());

app.get('/agent', (req,res)=>{
  res.render('agents/agent')
})

//______________error page.
app.get('*',(req,res) =>{
  res.render('error_page')
})

app.listen(3000)

