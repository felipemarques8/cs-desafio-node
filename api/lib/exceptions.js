'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseException = function (_Error) {
  _inherits(BaseException, _Error);

  function BaseException(msg, code) {
    _classCallCheck(this, BaseException);

    var _this = _possibleConstructorReturn(this, (BaseException.__proto__ || Object.getPrototypeOf(BaseException)).call(this, msg));

    _this.code = code;
    return _this;
  }

  return BaseException;
}(Error);

var BadRequest = exports.BadRequest = function (_BaseException) {
  _inherits(BadRequest, _BaseException);

  function BadRequest() {
    var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Bad Request';
    var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'bad_request';

    _classCallCheck(this, BadRequest);

    var _this2 = _possibleConstructorReturn(this, (BadRequest.__proto__ || Object.getPrototypeOf(BadRequest)).call(this, msg, code));

    _this2.status = 400;
    return _this2;
  }

  return BadRequest;
}(BaseException);

var Unauthorized = exports.Unauthorized = function (_BaseException2) {
  _inherits(Unauthorized, _BaseException2);

  function Unauthorized() {
    var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Unauthorized';
    var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'unauthorized';

    _classCallCheck(this, Unauthorized);

    var _this3 = _possibleConstructorReturn(this, (Unauthorized.__proto__ || Object.getPrototypeOf(Unauthorized)).call(this, msg, code));

    _this3.status = 401;
    return _this3;
  }

  return Unauthorized;
}(BaseException);

var Forbidden = exports.Forbidden = function (_BaseException3) {
  _inherits(Forbidden, _BaseException3);

  function Forbidden() {
    var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Forbidden';
    var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'forbidden';

    _classCallCheck(this, Forbidden);

    var _this4 = _possibleConstructorReturn(this, (Forbidden.__proto__ || Object.getPrototypeOf(Forbidden)).call(this, msg, code));

    _this4.status = 403;
    return _this4;
  }

  return Forbidden;
}(BaseException);

var NotFound = exports.NotFound = function (_BaseException4) {
  _inherits(NotFound, _BaseException4);

  function NotFound() {
    var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Not Found';
    var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'not_found';

    _classCallCheck(this, NotFound);

    var _this5 = _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).call(this, msg, code));

    _this5.status = 404;
    return _this5;
  }

  return NotFound;
}(BaseException);

var TooManyRequests = exports.TooManyRequests = function (_BaseException5) {
  _inherits(TooManyRequests, _BaseException5);

  function TooManyRequests() {
    var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Too Many Requests';
    var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'too_many_requests';

    _classCallCheck(this, TooManyRequests);

    var _this6 = _possibleConstructorReturn(this, (TooManyRequests.__proto__ || Object.getPrototypeOf(TooManyRequests)).call(this, msg, code));

    _this6.status = 429;
    return _this6;
  }

  return TooManyRequests;
}(BaseException);

var InternalServiceError = exports.InternalServiceError = function (_BaseException6) {
  _inherits(InternalServiceError, _BaseException6);

  function InternalServiceError() {
    var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Internal Service Error';
    var code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'internal_service_error';

    _classCallCheck(this, InternalServiceError);

    var _this7 = _possibleConstructorReturn(this, (InternalServiceError.__proto__ || Object.getPrototypeOf(InternalServiceError)).call(this, msg, code));

    _this7.status = 500;
    return _this7;
  }

  return InternalServiceError;
}(BaseException);