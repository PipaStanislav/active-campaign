var Connection = require('./connection');
var ECommerceCustomer = require('./e-commerce-customer');
var ECommerceOrder = require('./e-commerce-order');
var ECommerceOrderProduct = require('./e-commerce-order-products');

class DeepdataIntegrations {
  constructor({ baseApiUrl, baseHeaders }) {
    this.baseApiUrl = baseApiUrl;
    this.baseHeaders = baseHeaders;

    // API`s
    this.connection = new Connection({
      baseApiUrl: this.baseApiUrl,
      baseHeaders: this.baseHeaders,
    });
    this.eCommerceCustomer = new ECommerceCustomer({
      baseApiUrl: this.baseApiUrl,
      baseHeaders: this.baseHeaders,
    });
    this.eCommerceOrder = new ECommerceOrder({
      baseApiUrl: this.baseApiUrl,
      baseHeaders: this.baseHeaders,
    });
    this.eCommerceOrderProduct = new ECommerceOrderProduct({
      baseApiUrl: this.baseApiUrl,
      baseHeaders: this.baseHeaders,
    });
  }
}

/**
 * Module exports.
 * @public
 */

module.exports = DeepdataIntegrations;
