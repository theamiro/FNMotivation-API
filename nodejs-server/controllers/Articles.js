'use strict';

var utils = require('../utils/writer.js');
var Articles = require('../service/ArticlesService');

module.exports.addArticle = function addArticle (req, res, next, body) {
  Articles.addArticle(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.articles = function articles (req, res, next, from, to) {
  Articles.articles(from, to)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
