/**
 * @file user account connect DB init js
 * @author JYkid <mriliujy@gmail.com>
 * @version 0.0.1
 */

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Mined = Schema.Types.Mixed;
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;
const MAX_LOGIN_TRY = 5;
const LOCK_TIME = 5 * 60 * 1000;

const userSchema = new Schema({
  userName: {
    unique: true,
    required: true,
    type: String,
  },
  email: {
    unique: true,
    required: true,
    type: String,
  },
  password: {
    unique: true,
    required: true,
    type: String,
  },
  lockUntil: Number,
  loginAttempts: {
    type: Number,
    required: true,
    default: 0,
  },
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

userSchema.virtual("isLocked").get(() => {
  return !!(this.lockUntil && this.lockUntil > Date.now());
});

userSchema.pre("save", next => {
  if (user.isModified("password")) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, (error, hsah) => {
      if (error) return next(error);

      this.password = hash;
      next();
    })
  });
  next();
});

userSchema.methods = {
  comparePassword: (_password, password) => {
    return new Promise((resolve, reject) => {
      bcrypt.compare(_password, password, (err, isMatch) => {
        if (!err) resolve(isMatch);
        else reject(err); 
      });
    });
  },
  incLoginAttepts: (user) => {
    return new Promise((resolve, reject) => {
      if (this.lockUntil && this.lockUntil < Date.now()) {
        this.update({
          $set: {
            loginAttempts: 1
          },
          $unset: {
            lockUntil: 1
          }
        }, (err) => {
          if (!err) resolve(true);
          else reject(err);
        })
      } else {
        let updates = {
          $inc: {
            loginAttempts: 1
          }
        }

        if (this.loginAttempts + 1 >= MAX_LOGIN_TRY && !this.isLocked) {
          updates.$set = {
            lockUntil: Date.now() + LOCK_TIME
          }
        }

        this.update(updates, (err) => {
          if (!err) resolve(true);
          else reject(err);
        });
      }
    })
  },
};

mongoose.model("User", userSchema);
