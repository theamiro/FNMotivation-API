'use strict';


/**
 * adds a community
 * Adds an item to the system
 *
 * body Community Community item to add (optional)
 * no response value expected for this operation
 **/
exports.addCommunity = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * deletes a community
 *
 * id String ID of the community to be deleted
 * no response value expected for this operation
 **/
exports.communitiesIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * show the communities
 *
 * communityTitle String  (optional)
 * returns List
 **/
exports.searchInventory = function(communityTitle) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "image" : "https://avatar.com",
  "createdAt" : "2016-08-29T09:12:33.001Z",
  "name" : "Drug Addiction",
  "id" : "1"
}, {
  "image" : "https://avatar.com",
  "createdAt" : "2016-08-29T09:12:33.001Z",
  "name" : "Drug Addiction",
  "id" : "1"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update community
 * This can only be done by a logged in admin.
 *
 * body Community Updated community object
 * id String community id needed to update
 * no response value expected for this operation
 **/
exports.updateCommunity = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

