/**
 * @file user account connect DB init js
 * @author JYkid <mriliujy@gmail.com>
 * @version 0.0.1
 */

const mongoose = require("mongoose");
const db = "mongodb://localhost/test";
const glob = require("glob");
const { resolve } = require("path");

mongoose.Promise = global.Promise;

exports.initSchemas = () => {
  // require("./schema/user");
  // glob.sync(resolve(__dirname, './schema', "../user.js")).forEach(require);
  glob.sync(resolve(__dirname, './schema', "**/*.js")).forEach(require);
};

exports.connect = () => {
  let maxTryConnect = 0;
  if (process.env.NODE_ENV !== 'production') {
    mongoose.set('debug', true);
  }

  return new Promise((resolve, reject) => {
    if (process.env.NODE_ENV !== 'production') {
      mongoose.set('debug', true);
    }
    mongoose.connect(db);

    mongoose.connection.on("disonnected", () => {
      maxTryConnect++;
      if (maxTryConnect < 5) {
        mongoose.connect(db);
      } else {
        throw new Error("mongodb 迷路了");
      }
    });

    mongoose.connection.on("err", err => {
      maxTryConnect++;
      if (maxTryConnect < 5) {
        mongoose.connect(db);
      } else {
        throw new Error("mongodb 迷路了");
      }
    });

    mongoose.connection.on("open", () => {
      // const User = mongoose.model("user", { name: String });
      // const user = new User({ name: "JYkid" });

      // user.save().then(() => {
      //   console.log("save success");
      // })
      
      resolve();
      console.log("Mongoodb connect done!");
  });
  })
};
