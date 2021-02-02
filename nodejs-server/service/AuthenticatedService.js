'use strict';


/**
 * list the recent actions per account
 *
 * readStatus String The Notifications tied to an account (optional)
 * returns List
 **/
exports.notificationsQuery = function(readStatus) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "createdAt" : "2016-08-29T09:12:33.001Z",
  "read" : true,
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "avatar" : "https://avatar.jpg",
  "message" : "Michael Amiro commented on your post"
}, {
  "createdAt" : "2016-08-29T09:12:33.001Z",
  "read" : true,
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "avatar" : "https://avatar.jpg",
  "message" : "Michael Amiro commented on your post"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

