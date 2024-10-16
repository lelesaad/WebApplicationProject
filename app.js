
require('dotenv').config();

const express = require('express');
const app = express();
//NouraF- note that the path is a little different it's under routes
const connectDB = require('./server/config/db');


const expressLayout = require('express-ejs-layouts');
const PORT = 3000 || process.env.PORT;


// Connect to DB ..
connectDB();

app.use(express.static('public'));

// templaiting Engine
app.use(expressLayout);
app.set('layout','./layouts/main');
app.set('view engine','ejs');

app.use('/', require('./server/routes/main'));

app.listen(PORT,()=>{
    console.log(`App listening on port ${PORT}`);
    
})