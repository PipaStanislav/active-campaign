var Deal = require('./deal');
var CustomDealField = require('./custom-deal-field');
var CustomDealFieldValue = require('./custom-deal-field-value');
var Pipeline = require('./pipeline');
var SecondaryContract = require('./secondary-contacts');
var Stage = require('./stage');

class Deals {
  constructor({ baseApiUrl, baseHeaders }) {
    this.baseApiUrl = baseApiUrl;
    this.baseHeaders = baseHeaders;

    // API`s
    this.deal = new Deal({ baseApiUrl: this.baseApiUrl, baseHeaders: this.baseHeaders });
    this.customDealField = new CustomDealField({
      baseApiUrl: this.baseApiUrl,
      baseHeaders: this.baseHeaders,
    });
    this.customDealFieldValue = new CustomDealFieldValue({
      baseApiUrl: this.baseApiUrl,
      baseHeaders: this.baseHeaders,
    });
    this.pipeline = new Pipeline({ baseApiUrl: this.baseApiUrl, baseHeaders: this.baseHeaders });
    this.secondaryContract = new SecondaryContract({
      baseApiUrl: this.baseApiUrl,
      baseHeaders: this.baseHeaders,
    });
    this.stage = new Stage({ baseApiUrl: this.baseApiUrl, baseHeaders: this.baseHeaders });
  }
}

/**
 * Module exports.
 * @public
 */

module.exports = Deals;
