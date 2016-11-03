'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

require('./api/models/User');

var _config = require('./api/config');

var _config2 = _interopRequireDefault(_config);

var _routes = require('./api/routes');

var _routes2 = _interopRequireDefault(_routes);

var _cors = require('./api/lib/c');

var _cors2 = _interopRequireDefault(_cors);

var _errors = require('./api/lib/error');

var _errors2 = _interopRequireDefault(_errors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
exports.default = app;


_mongoose2.default.connect(_config2.default.database);

app.use(_cors2.default);
app.use((0, _bodyParser2.default)());
app.use(_routes2.default);
app.use(_errors2.default);

var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log('Express server listening on port: '+port);
});
