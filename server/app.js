'use strict'

var express=require ('express');
var bodyParser=require('body-parser');

var app=express();

//cargamos las rutas

var user_routes=require('./routes/user');


//cargamos los middlewares

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//rutas

app.use('/api',user_routes);

//exportar

module.exports=app;