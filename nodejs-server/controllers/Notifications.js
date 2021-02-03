'use strict';

var utils = require('../utils/writer.js');
var Notifications = require('../service/NotificationsService');

module.exports.notificationsQuery = function notificationsQuery (req, res, next, readStatus) {
  Notifications.notificationsQuery(readStatus)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
