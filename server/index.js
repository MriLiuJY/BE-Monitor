/**
 * @file user account main js in project
 * @author JYkid <mriliujy@gmail.com>
 * @version 0.0.1
 */

// const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const { connect, initSchemas } = require('./database/init');

let Message;

(() => {
  connect();

  initSchemas();

  Message = mongoose.model('Message');
})(Message);

const error = require('./routes/error');

const app = express();
// disable response server info
app.disable('x-powered-by');
app.use(express.static('./'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('build'));

app.use(session({
  secret: 'my-secret',
  resave: false,
  saveUninitialized: true,
}));


/**
 * 设置允许跨域
 * @emits CORS http request
 */
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Content-type');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS,PATCH');
  next();
});

app.use('/error', error);


const point = 4000;
console.log(`Your server listen at http://localhost:${point}/index`);
app.listen(point);
