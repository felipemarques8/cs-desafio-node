'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _process$env = process.env,
    MONGO_DB = _process$env.MONGO_DB,
    NODE_ENV = _process$env.NODE_ENV;


var config = {
  development: {
    database: 'mongodb://felipemarques8:felipe123@ds063186.mlab.com:63186/csdesafio'
  },

  production: {
    database: MONGO_DB
  }
};

exports.default = config[NODE_ENV || 'development'];