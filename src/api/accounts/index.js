var Account = require('./account');
var AccountContactAssociation = require('./account-contact-association');
var CustomAccountFields = require('./custom-account-fields');
var CustomAccountFieldsValues = require('./custom-account-fields-values');

class ActiveCampaign {
  constructor({ apiUrl, apiKey }) {
    this.baseApiUrl = `${apiUrl}/api/3`;
    this.baseHeaders = { 'Api-Token': apiKey };

    // API`s
    this.account = new Account({ baseApiUrl: this.baseApiUrl, baseHeaders: this.baseHeaders });
    this.accountContactAssociation = new AccountContactAssociation({
      baseApiUrl: this.baseApiUrl,
      baseHeaders: this.baseHeaders,
    });
    this.customAccountFields = new CustomAccountFields({
      baseApiUrl: this.baseApiUrl,
      baseHeaders: this.baseHeaders,
    });
    this.customAccountFieldsValues = new CustomAccountFieldsValues({
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
