'use strict';

var utils = require('../utils/writer.js');
var Public = require('../service/PublicService');

module.exports.searchInventory = function searchInventory (req, res, next, from, skip) {
  Public.searchInventory(from, skip)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stories = function stories (req, res, next, from, to) {
  Public.stories(from, to)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
