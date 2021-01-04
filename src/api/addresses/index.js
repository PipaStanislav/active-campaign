var Address = require('./address');

class Addresses {
  constructor({ baseApiUrl, baseHeaders }) {
    this.baseApiUrl = baseApiUrl;
    this.baseHeaders = baseHeaders;

    // API`s
    this.address = new Address({ baseApiUrl: this.baseApiUrl, baseHeaders: this.baseHeaders });
  }
}

/**
 * Module exports.
 * @public
 */

module.exports = Addresses;
