const Contact = require('./contact/contact');

class ActiveCampaign {
  constructor({ apiUrl, apiKey }) {
    this.baseApiUrl = `${apiUrl}/api/3`;
    this.baseHeaders = { 'Api-Token': apiKey };

    // API`s
    this.contact = new Contact({ baseApiUrl: this.baseApiUrl, baseHeaders: this.baseHeaders });
  }
}

/**
 * Module exports.
 * @public
 */

module.exports = ActiveCampaign;
