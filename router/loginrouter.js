const express = require('express');

// internal imports
const {getlogin} = require('../controller/logincontroller');

const loginrouter= express.Router();

loginrouter.get('/',getlogin);


module.exports = loginrouter;
