var Campaign = require('./campaign');
var Message = require('./message');

class Campaigns {
  constructor({ baseApiUrl, baseHeaders }) {
    this.baseApiUrl = baseApiUrl;
    this.baseHeaders = baseHeaders;

    // Contacts API`s
    this.campaign = new Campaign({ baseApiUrl: this.baseApiUrl, baseHeaders: this.baseHeaders });
    this.message = new Message({ baseApiUrl: this.baseApiUrl, baseHeaders: this.baseHeaders });
  }
}

/**
 * Module exports.
 * @public
 */

module.exports = Campaigns;
