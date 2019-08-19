/**
 * 上报监控错误请求
 * @emits error event monitor ajax request
 * @parma { request, response }
 */
const express = require('express');
const getAllErrorList = require('../service/error');

const error = express.Router();

error.get('/', (req, res) => {
  const data = getAllErrorList();
  res.send(data);
});

module.exports = error;
