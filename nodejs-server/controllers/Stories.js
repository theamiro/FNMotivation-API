'use strict';

var utils = require('../utils/writer.js');
var Stories = require('../service/StoriesService');

module.exports.addStory = function addStory (req, res, next, body) {
  Stories.addStory(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stories = function stories (req, res, next, from, to) {
  Stories.stories(from, to)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
