'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _exceptions = require('../lib/exceptions');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UsersResource = function () {
  function UsersResource(User) {
    _classCallCheck(this, UsersResource);

    this.User = User;
  }

  _createClass(UsersResource, [{
    key: 'index',
    value: function index(req, res, next) {
      this.User.findOne({ _id: req.params.id }, function (err, user) {
        if (err) return next(err);
        if (req.token !== user.token) return next(new _exceptions.Unauthorized('Não autorizado'));

        res.json({ success: true, user: user });
      });
    }
  }]);

  return UsersResource;
}();

exports.default = UsersResource;