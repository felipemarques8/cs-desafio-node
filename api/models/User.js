'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = new _mongoose2.default.Schema({
  _id: {
    type: String,
    default: function _default() {
      return _uuid2.default.v1();
    }
  },
  nome: { type: String, trim: true },
  email: { type: String, lowercase: true, index: { unique: true } },
  salt: { type: String },
  senha: String,
  telefones: [{ numero: Number, ddd: Number }],
  data_criacao: Date,
  data_atualizacao: { type: Date, default: Date.now },
  ultimo_login: Date,
  token: String
});

exports.default = _mongoose2.default.model('User', User);