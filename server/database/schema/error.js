/**
 * @file user account connect DB init js
 * @author JYkid <mriliujy@gmail.com>
 * @version 0.0.1
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Mined = Schema.Types.Mixed;

const errorSchema = new Schema({
  // message: String,
  // detail: String,
  // fileName: String,
  // date: {
  //   type: Date,
  //   default: Date.now()
  // },
  // errorType: String,
  // ip: [String],
  // userAgent: String,
  // url: String,
  // line: Number,
  // errorLine: Mined,
  appName: String,
  appVersion: String,
  platform: String,
  url: String,
  type: String,
  meta: {
    createAt: {
      type: Date,
      default: Date.now(),
    },
    updateAt: {
      type: Date,
      default: Date.now(),
    }
  },
});

errorSchema.pre("save", next => {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now();
  } else {
    console.log(Date.now());
    // this.meta.updateAt = Date.now();
  }
  next();
});

mongoose.model("Message", errorSchema);
