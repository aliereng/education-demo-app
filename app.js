const express = require('express');
const moment = require('moment');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
var methodOverride = require('method-override')

const router = require('./router/index');
const { connectDatabase } = require('./helpers/databaseHelper');
const errorHandler = require('./middlewares/ErrorHandler');
const dotenv = require("dotenv")
const app = express();
const port = 3000;
global.userIN = null;
dotenv.config({
  path:"./config/env/config.env"
});


// HELPER
connectDatabase();

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(
  session({
    secret: 'alierengonulcelen',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.MongoDB_URL })
  })
);

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(flash());
app.use((req, res, next) => {
  res.locals.moment = moment;
  res.locals.flashMessages = req.flash();
  next();
});
app.use(methodOverride('_method', {
  methods: ['POST', 'GET']
}));


//ROUTE
app.use("*", (req,res,next)=> {
  userIN = req.session.userID;
  userRole = req.session.role;
  next();
})
app.use(router);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`app started on port 3000`);
});
