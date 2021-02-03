'use strict';


/**
 * adds an article item
 * Adds an item to the system
 *
 * body Article Article item to add (optional)
 * no response value expected for this operation
 **/
exports.addArticle = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * show the communities
 *
 * from Integer 
 * to Integer 
 * returns List
 **/
exports.articles = function(from,to) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "createdAt" : "2016-08-29T09:12:33.001Z",
  "comments" : [ {
    "createdAt" : "2016-08-29T09:12:33.001Z",
    "articleID" : "1",
    "id" : "1",
    "fullname" : "John Doe",
    "avatar" : "https://avatar.com",
    "message" : "This is a comment",
    "userID" : "1",
    "username" : "johndoe"
  }, {
    "createdAt" : "2016-08-29T09:12:33.001Z",
    "articleID" : "1",
    "id" : "1",
    "fullname" : "John Doe",
    "avatar" : "https://avatar.com",
    "message" : "This is a comment",
    "userID" : "1",
    "username" : "johndoe"
  } ],
  "id" : "1",
  "fullname" : "John Doe",
  "avatar" : "https://avatar.com",
  "title" : "This is the first story",
  "utl" : "https://twitter.com/",
  "community" : {
    "image" : "https://avatar.com",
    "createdAt" : "2016-08-29T09:12:33.001Z",
    "name" : "Drug Addiction",
    "id" : "1"
  },
  "userID" : "1",
  "username" : "johndoe"
}, {
  "createdAt" : "2016-08-29T09:12:33.001Z",
  "comments" : [ {
    "createdAt" : "2016-08-29T09:12:33.001Z",
    "articleID" : "1",
    "id" : "1",
    "fullname" : "John Doe",
    "avatar" : "https://avatar.com",
    "message" : "This is a comment",
    "userID" : "1",
    "username" : "johndoe"
  }, {
    "createdAt" : "2016-08-29T09:12:33.001Z",
    "articleID" : "1",
    "id" : "1",
    "fullname" : "John Doe",
    "avatar" : "https://avatar.com",
    "message" : "This is a comment",
    "userID" : "1",
    "username" : "johndoe"
  } ],
  "id" : "1",
  "fullname" : "John Doe",
  "avatar" : "https://avatar.com",
  "title" : "This is the first story",
  "utl" : "https://twitter.com/",
  "community" : {
    "image" : "https://avatar.com",
    "createdAt" : "2016-08-29T09:12:33.001Z",
    "name" : "Drug Addiction",
    "id" : "1"
  },
  "userID" : "1",
  "username" : "johndoe"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

