'use strict';

function Achievements (Client) {
  this._client = Client;
}

/**
* Fetch achievement information through the API
* @param {integer} path
* @return {request|promise}
*/
Achievements.prototype.getByID = function (achievementID) {
  return this._client._get(urlWrapper(this._client, [achievementID]));
}

/**
* Generates and formats api url specifically as they relate to the achievements API.
* @param {Array.<string>} path
* @param {Object} query
* @return {string}
*/
var urlWrapper = function (client, path, query) {
  var newPath = ['wow', 'achievement'];
  if (!path) path = [];
  if (!query) query = {};

  for (var x in path) {
    if (x == 0 && path[x] == 'wow') continue;
    if (x == 1 && path[x] == 'achievement') continue;

    newPath.push(path[x]);
  }

  var path = newPath;

  return client.generateApiUrl(path, query);

}

module.exports = Achievements;