const mongoose = require('mongoose');

const Message = mongoose.model('Message');

const getAllErrorList = function () {
  const messgaes = Message.find({}).sort({
    'meta.createdAt': -1,
  });

  return messgaes;
};

module.exports = getAllErrorList;
