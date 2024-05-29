// external Imports
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const cookieparser = require('cookie-parser');

// Internal imports
const {errorhandler,notFoundhandler} = require('./middleware/common/errorhandler');
const loginrouter = require('./router/loginrouter');
const inboxrouter =require('./router/inboxrouter');






const app = express();
dotenv.config();


// Database Connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING)
.then(()=>console.log('DB Connected Successfully'))
.catch(err => console.log(err));


// request parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// setting view Engine
app.set('view engine','ejs');

// static folder
app.use(express.static(path.join(__dirname ,'./public/')));

// cookie parser

app.use(cookieparser(process.env.COOKIE_SECRET));




// ROUTE HANDLER
 app.use('/',loginrouter);
 app.use('/inbox',inboxrouter);
//  app.use('/user',userrouter);






app.get('/',(req,res)=>
{
   
   
    res.status(200).send('Hello Robin');




})

// ERROR HANDLER

        // notfound error

 app.use(notFoundhandler);

        //  Default

app.use(errorhandler);


// SERVER 

app.listen(process.env.PORT,()=>
{
 console.log('server is running on port '+ process.env.PORT);
});
