var Branding = require('./branding');

class Brandings {
  constructor({ baseApiUrl, baseHeaders }) {
    this.baseApiUrl = baseApiUrl;
    this.baseHeaders = baseHeaders;

    // API`s
    this.branding = new Branding({
      baseApiUrl: this.baseApiUrl,
      baseHeaders: this.baseHeaders,
    });
  }
}

/**
 * Module exports.
 * @public
 */

module.exports = Brandings;
