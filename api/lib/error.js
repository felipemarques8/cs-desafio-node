'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (err, req, res, next) {
  if (err.name === 'ValidationError') {
    err.status = 400;
  }

  res.status(err.status || 500).json({
    message: err.message || 'Internal Service Error',
    errors: err.errors
  });

  next();
};