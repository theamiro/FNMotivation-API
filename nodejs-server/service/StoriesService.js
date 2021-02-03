'use strict';


/**
 * adds a story item
 * Adds an item to the system
 *
 * body Article Article item to add (optional)
 * no response value expected for this operation
 **/
exports.addStory = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * show the stories
 *
 * from Integer 
 * to Integer 
 * returns List
 **/
exports.stories = function(from,to) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "createdAt" : "2016-08-29T09:12:33.001Z",
  "comments" : [ {
    "storyID" : "1",
    "createdAt" : "2016-08-29T09:12:33.001Z",
    "id" : "1",
    "fullname" : "John Doe",
    "avatar" : "https://avatar.com",
    "message" : "This si a comment",
    "userID" : "1",
    "username" : "johndoe"
  }, {
    "storyID" : "1",
    "createdAt" : "2016-08-29T09:12:33.001Z",
    "id" : "1",
    "fullname" : "John Doe",
    "avatar" : "https://avatar.com",
    "message" : "This si a comment",
    "userID" : "1",
    "username" : "johndoe"
  } ],
  "id" : "1",
  "fullname" : "John Doe",
  "avatar" : "https://avatar.com",
  "title" : "This is the first story",
  "body" : "CEO of Protenus, leveraging AI to reduce risk and improve patient trust for healthcare systems across North America.\n\nIn late May, a nurse anesthetist was sentenced to nearly three years in federal prison for tampering with opioid analgesics intended for patients. For nearly eight months, while working in a hospital surgery and birthing center, he tampered with fentanyl so that he could use the drugs himself",
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
    "storyID" : "1",
    "createdAt" : "2016-08-29T09:12:33.001Z",
    "id" : "1",
    "fullname" : "John Doe",
    "avatar" : "https://avatar.com",
    "message" : "This si a comment",
    "userID" : "1",
    "username" : "johndoe"
  }, {
    "storyID" : "1",
    "createdAt" : "2016-08-29T09:12:33.001Z",
    "id" : "1",
    "fullname" : "John Doe",
    "avatar" : "https://avatar.com",
    "message" : "This si a comment",
    "userID" : "1",
    "username" : "johndoe"
  } ],
  "id" : "1",
  "fullname" : "John Doe",
  "avatar" : "https://avatar.com",
  "title" : "This is the first story",
  "body" : "CEO of Protenus, leveraging AI to reduce risk and improve patient trust for healthcare systems across North America.\n\nIn late May, a nurse anesthetist was sentenced to nearly three years in federal prison for tampering with opioid analgesics intended for patients. For nearly eight months, while working in a hospital surgery and birthing center, he tampered with fentanyl so that he could use the drugs himself",
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

