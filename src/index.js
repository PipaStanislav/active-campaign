var Contacts = require('./api/contacts');
var Automations = require('./api/automations');

class ActiveCampaign {
  constructor({ apiUrl, apiKey }) {
    this.baseApiUrl = `${apiUrl}/api/3`;
    this.baseHeaders = { 'Api-Token': apiKey };

    // API`s
    this.contacts = new Contacts({ baseApiUrl: this.baseApiUrl, baseHeaders: this.baseHeaders });
    this.automations = new Automations({
      baseApiUrl: this.baseApiUrl,
      baseHeaders: this.baseHeaders,
    });
  }
}

/**
 * Module exports.
 * @public
 */

module.exports = ActiveCampaign;
