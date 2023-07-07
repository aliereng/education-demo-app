const express = require('express');

const router = require("./route/index");
const {connectDatabase} = require("./helpers/databaseHelper");


const app = express();
const port = 3000;

// HELPER
connectDatabase();

// TEMPLATE ENGINE 
app.set('view engine', 'ejs')

// MIDDLEWARE
app.use(express.static('public'));


//ROUTE
app.use(router);

app.listen(port, ()=> {
    console.log(`app started on port 3000`)
})
