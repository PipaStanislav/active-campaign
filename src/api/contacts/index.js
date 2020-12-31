var Contact = require('./contact');
var Automation = require('./automation');
var CustomField = require('./custom-field');
var CustomFieldValues = require('./custom-field-value');

class Contacts {
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

module.exports = Contacts;
