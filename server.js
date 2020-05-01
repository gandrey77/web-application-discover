const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
// Iniciando o app
const app = express();

//Indica pra aplicação que vamos usar json para POST/GET
app.use(express.json());

// Iniciando  o DB 
mongoose.connect('mongodb://127.0.0.1/nodeapi', 
{useNewUrlParser: true, 
useUnifiedTopology: true,
useFindAndModify: false });
requireDir('./scr/models');

//Manda todas as requisições para o /routes
app.use('/', require('./scr/routes'));


app.listen(3001);