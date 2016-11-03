'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usersResource = exports.registerResource = exports.loginResource = undefined;

var _login = require('./login');

var _login2 = _interopRequireDefault(_login);

var _register = require('./register');

var _register2 = _interopRequireDefault(_register);

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _mongoose2.default.model('User');

var loginResource = exports.loginResource = new _login2.default(User);
var registerResource = exports.registerResource = new _register2.default(User);
var usersResource = exports.usersResource = new _users2.default(User);