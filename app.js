const express = require('express');
const moment = require('moment');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const router = require('./router/index');
const { connectDatabase } = require('./helpers/databaseHelper');
const errorHandler = require('./middlewares/ErrorHandler');

const app = express();
const port = 3000;
global.userIN = null;
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
    store: MongoStore.create({ mongoUrl: 'mongodb+srv://aeggea:ali392630EREN@cluster0.o1smq.mongodb.net/educationDB?retryWrites=true&w=majority' })
  })
);

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.locals.moment = moment;
  next();
});


//ROUTE
app.use("*", (req,res,next)=> {
  userIN = req.session.userID;
  next();
})
app.use(router);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`app started on port 3000`);
});
