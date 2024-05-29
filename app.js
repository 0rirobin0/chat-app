const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();
dotenv.config();


// Database Connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING)
.then(()=>console.log('DB Connected Successfully'))
.catch(err => console.log(err));


// request parser
app.use(express.json);
app.use(express.urlencoded({extended:true}));

