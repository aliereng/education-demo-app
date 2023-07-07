const express = require('express');

const router = require("./route/index");



const app = express();
const port = 3000;

app.set('view engine', 'ejs')

app.use(express.static('public'));

app.use(router);

app.listen(port, ()=> {
    console.log(`app started on port 3000`)
})
