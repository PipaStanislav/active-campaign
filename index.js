const Contact = require('./contact/contact');

class ActiveCampaign {
  constructor({ apiUrl, apiKey }) {
    this.baseApiUrl = apiUrl;
    this.headers = { 'Api-Token': apiKey };

    // API`s
    this.contact = new Contact({ baseApiUrl: this.baseApiUrl, headers: this.headers });
  }
}

/**
 * Module exports.
 * @public
 */

module.exports = ActiveCampaign;
