'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _exceptions = require('../lib/exceptions');

var _utils = require('../lib/vemail');

var _security = require('../lib/security');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LoginResource = function () {
  function LoginResource(User) {
    _classCallCheck(this, LoginResource);

    this.User = User;
  }

  _createClass(LoginResource, [{
    key: 'validate',
    value: function validate(req, res, next) {
      var body = req.body;


      if (!body.email || body.email.trim() === '') {
        return next(new _exceptions.BadRequest('Campo E-mail não pode ser nulo'));
      }

      if (!(0, _utils.isEmail)(body.email)) {
        return next(new _exceptions.BadRequest('E-mail inválido'));
      }

      if (!body.senha || body.senha.trim() === '') {
        return next(new _exceptions.BadRequest('Campo Senha não pode ser nula'));
      }

      next();
    }
  }, {
    key: 'create',
    value: function create(req, res, next) {
      var _req$body = req.body,
          email = _req$body.email,
          senha = _req$body.senha;


      this.User.findOne({ email: email }, function (err, user) {
        if (err) return next(err);

        if (!user) {
          return next(new _exceptions.Unauthorized('E-mail ou senha inválida'));
        }

        if ((0, _security.verifyUserPassword)(senha, user)) {
          user.token = (0, _security.issueToken)(user._id);
          user.ultimo_login = Date.now();
          user.save(function (err) {
            if (err) return next(err);
            res.json({ success: true, user: user });
          });
        } else {
          next(new _exceptions.Unauthorized('E-mail ou senha inválida'));
        }
      });
    }
  }]);

  return LoginResource;
}();

exports.default = LoginResource;