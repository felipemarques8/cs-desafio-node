'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _resources = require('./controller');

var _security = require('./lib/security');

var routes = (0, _express.Router)();

routes.route('/').get(function(req, res) {
    res.json({
        success: true,
        message: 'API do Desafio Node.js'
    });
});

routes.route('/login').post(_resources.loginResource.create.bind(_resources.loginResource));

routes.route('/register').post([_resources.registerResource.validate.bind(_resources.registerResource), _resources.registerResource.checkEmailIsInUse.bind(_resources.registerResource), _resources.registerResource.create.bind(_resources.registerResource)]);

routes.route('/user/:id').get([_security.verifyToken, _resources.usersResource.index.bind(_resources.usersResource)]);

exports.default = routes;