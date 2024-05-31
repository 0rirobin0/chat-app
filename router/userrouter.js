const express = require('express');

// ixternal imports
const user = require('../controller/usercontroller');

const userrouter = express.Router();

userrouter.get('/',user);


module.exports = userrouter;