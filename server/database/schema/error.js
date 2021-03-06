/**
 * @file user account connect DB init js
 * @author JYkid <mriliujy@gmail.com>
 * @version 0.0.1
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Mixed = Schema.Types.Mixed;

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
  // errorLine: Mixed,
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

errorSchema.pre("save", function(next) {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now();
  } else {
    this.meta.updateAt = Date.now();
  }
  next();
});

mongoose.model("Message", errorSchema);
