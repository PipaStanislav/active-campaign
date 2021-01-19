var Account = require('./account');
var AccountContactAssociation = require('./account-contact-association');
var CustomAccountField = require('./custom-account-field');
var CustomAccountFieldValue = require('./custom-account-field-value');

class Accounts {
  constructor({ baseApiUrl, baseHeaders }) {
    this.baseApiUrl = baseApiUrl;
    this.baseHeaders = baseHeaders;

    // API`s
    this.account = new Account({ baseApiUrl: this.baseApiUrl, baseHeaders: this.baseHeaders });
    this.accountContactAssociation = new AccountContactAssociation({
      baseApiUrl: this.baseApiUrl,
      baseHeaders: this.baseHeaders,
    });
    this.customAccountField = new CustomAccountField({
      baseApiUrl: this.baseApiUrl,
      baseHeaders: this.baseHeaders,
    });
    this.customAccountFieldsValue = new CustomAccountFieldValue({
      baseApiUrl: this.baseApiUrl,
      baseHeaders: this.baseHeaders,
    });
  }
}

/**
 * Module exports.
 * @public
 */

module.exports = Accounts;
