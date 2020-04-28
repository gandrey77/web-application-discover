const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
// Iniciando o app
const app = express();

// Iniciando  o DB 
mongoose.connect('mongodb://127.0.0.1/nodeapi', 
{useNewUrlParser: true, 
useUnifiedTopology: true});
requireDir('./scr/models');


app.use('/', require('./scr/routes'));


app.listen(3001);