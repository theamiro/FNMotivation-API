'use strict';

var utils = require('../utils/writer.js');
var Authenticated = require('../service/AuthenticatedService');

module.exports.notificationsQuery = function notificationsQuery (req, res, next, readStatus) {
  Authenticated.notificationsQuery(readStatus)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
