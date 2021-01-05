var Template = require('./template');

class Templates {
  constructor({ baseApiUrl, baseHeaders }) {
    this.baseApiUrl = baseApiUrl;
    this.baseHeaders = baseHeaders;

    // API`s
    this.template = new Template({
      baseApiUrl: this.baseApiUrl,
      baseHeaders: this.baseHeaders,
    });
  }
}

/**
 * Module exports.
 * @public
 */

module.exports = Templates;
