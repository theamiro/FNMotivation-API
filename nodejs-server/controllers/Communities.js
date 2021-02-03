'use strict';

var utils = require('../utils/writer.js');
var Communities = require('../service/CommunitiesService');

module.exports.addCommunity = function addCommunity (req, res, next, body) {
  Communities.addCommunity(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.communitiesIdDELETE = function communitiesIdDELETE (req, res, next, id) {
  Communities.communitiesIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchInventory = function searchInventory (req, res, next, communityTitle) {
  Communities.searchInventory(communityTitle)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCommunity = function updateCommunity (req, res, next, body, id) {
  Communities.updateCommunity(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
