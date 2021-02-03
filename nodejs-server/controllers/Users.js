'use strict';

var utils = require('../utils/writer.js');
var Users = require('../service/UsersService');

module.exports.followUser = function followUser (req, res, next, body, id) {
  Users.followUser(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
