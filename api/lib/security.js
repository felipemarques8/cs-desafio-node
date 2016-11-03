'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = exports.issueToken = exports.verifyUserPassword = exports.encryptPassword = undefined;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

var _exceptions = require('../lib/exceptions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var encryptPassword = exports.encryptPassword = function encryptPassword(salt, password) {
  return _crypto2.default.createHmac('sha1', salt).update(password).digest('hex');
};

var verifyUserPassword = exports.verifyUserPassword = function verifyUserPassword(password, user) {
  return encryptPassword(user.salt, password) === user.senha;
};

var issueToken = exports.issueToken = function issueToken(payload, tokenExpirationInSeconds) {
  return _jsonwebtoken2.default.sign({ id: payload }, 'secret', { expiresIn: tokenExpirationInSeconds });
};

var verifyToken = exports.verifyToken = function verifyToken(req, tokenExpirationInSeconds, next) {
  var token = void 0;
  var parts = req.headers && req.headers.authorization && req.headers.authorization.split(' ');

  if (parts && parts.length === 2) {
    var scheme = parts[0];
    var credentials = parts[1];

    if (/^Bearer$/i.test(scheme)) {
      token = credentials;
    }
  }

  if (!token) {
    return next(new _exceptions.BadRequest('Token deve ser enviado via authorization header Bearer.'));
  }

  _jsonwebtoken2.default.verify(token, 'secret', {}, function (err) {
    if (err && err.expiredAt) {
      return next(new _exceptions.Unauthorized('Sessão inválida'));
    } else if (err) {
      return next(new _exceptions.BadRequest('Token inválido'));
    }

    req.token = token;
    return next(err);
  });
};