/**
 * @file user account main js in project
 * @author JYkid <mriliujy@gmail.com>
 * @version 0.0.1
 */

const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const session = require('express-session');
const mongoose = require("mongoose");
const { connect, initSchemas } = require('./database/init');

const app = express();
app.use(express.static("./"));

(async() => {
  await connect();

  initSchemas();

  const User = mongoose.model("User");

  const users = await User.find({});

  console.log(users);
})();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("build"));

app.use(session({
  secret: 'my-secret',
  resave: false,
  saveUninitialized: true
}));


/**
 * 设置允许跨域
 * @emits CORS http request
 */
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (req.method == 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});


const point = 9998;
console.log("Your server listen at " + "http://localhost:" +point + "/index");
app.listen(point);

