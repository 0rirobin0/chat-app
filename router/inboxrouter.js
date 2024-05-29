const express =require('express');
const inbox = require('../controller/inboxcontroller');

const inboxrouter = express.Router();

inboxrouter.get('/',inbox);

module.exports =inboxrouter;