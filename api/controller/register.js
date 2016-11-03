'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

var _exceptions = require('../lib/exceptions');

var _utils = require('../lib/vemail');

var _security = require('../lib/security');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RegisterResource = function () {
  function RegisterResource(User) {
    _classCallCheck(this, RegisterResource);

    this.User = User;
  }

  _createClass(RegisterResource, [{
    key: 'validate',
    value: function validate(req, res, next) {
      var body = req.body;


      if (!body.email || body.email.trim() === '') {
        return next(new _exceptions.BadRequest('Campo E-mail não pode ser nulo'));
      }

      if (!(0, _utils.isEmail)(body.email)) {
        return next(new _exceptions.BadRequest('Campo E-mail inválido'));
      }

      if (!body.nome || body.nome.trim() === '') {
        return next(new _exceptions.BadRequest('Campo Nome não pode ser nulo'));
      }

      if (!body.senha || body.senha.trim() === '') {
        return next(new _exceptions.BadRequest('Campo Senha não pode ser nula'));
      }

      next();
    }
  }, {
    key: 'prepareNewUserObject',
    value: function prepareNewUserObject(obj) {
      var sanitizedObj = {};
      var salt = _crypto2.default.randomBytes(32).toString('base64');

      sanitizedObj.email = obj.email.trim();
      sanitizedObj.nome = obj.nome.trim();
      sanitizedObj.data_criacao = Date.now();
      sanitizedObj.salt = salt;
      sanitizedObj.senha = (0, _security.encryptPassword)(salt, obj.senha);
      sanitizedObj.ultimo_login = Date.now();

      var newUser = new this.User(sanitizedObj);
      newUser.token = (0, _security.issueToken)(newUser._id);
      return newUser;
    }
  }, {
    key: 'checkEmailIsInUse',
    value: function checkEmailIsInUse(req, res, next) {
      this.User.findOne({ email: req.body.email }, function (err, doc) {
        if (doc) {
          return next(new _exceptions.BadRequest('E-mail já existente'));
        }
        next(err);
      });
    }
  }, {
    key: 'create',
    value: function create(req, res, next) {
      var user = this.prepareNewUserObject(req.body);

      user.save(function (err, user) {
        if (err) return next(err);
        return res.json({ success: true, user: user });
      });
    }
  }]);

  return RegisterResource;
}();

exports.default = RegisterResource;