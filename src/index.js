var Contact = require('./contact/contact');
var Automation = require('./contact/automation');
var CustomField = require('./contact/custom-field');
var CustomFieldValues = require('./contact/custom-field-value');

class ActiveCampaign {
  constructor({ apiUrl, apiKey }) {
    this.baseApiUrl = `${apiUrl}/api/3`;
    this.baseHeaders = { 'Api-Token': apiKey };

    // Contacts API`s
    this.contact = new Contact({ baseApiUrl: this.baseApiUrl, baseHeaders: this.baseHeaders });
    this.automation = new Automation({
      baseApiUrl: this.baseApiUrl,
      baseHeaders: this.baseHeaders,
    });
    this.customFields = new CustomField({
      baseApiUrl: this.baseApiUrl,
      baseHeaders: this.baseHeaders,
    });
    this.customFields = new CustomFieldValues({
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
