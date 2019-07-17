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
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Headers', 'Content-type');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS,PATCH");
  next();
});
// app.all('*', (req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
//   res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//   if (req.method == 'OPTIONS') {
//     res.send(200);
//   } else {
//     next();
//   }
// });


app.post("/error", (req, res) => {
  const Message = mongoose.model("Message");
  let body = req.body;
  let data = {
    appName: body.appName,
    appVersion: body.appVersion,
    platform: body.platform,
    url: body.url,
    type: body.detail.type,
  };
  console.log(data);
  console.log("--------------");
  let message = new Message(data);
  message.save();

  res.send(200);
});


const point = 4000;
console.log("Your server listen at " + "http://localhost:" +point + "/index");
app.listen(point);

