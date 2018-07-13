'use strict';

const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    port = 3000;


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


const routes = require('./api/routes');
routes(app);



app.listen(port);
console.log('Server started on port: ' + port);
