const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
let routes = require('./routes');

const app = express();
const port = 3000|process.env.PORT;
// const port = 3030;

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "./views"))

app.use(express.static(path.join(__dirname, "./static")))

app.use('/', routes());


app.listen(port, ()=>{
    console.log(`listening on port: ${port}`)
});