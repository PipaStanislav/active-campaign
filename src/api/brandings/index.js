var Branding = require('./branding');

class Brandings {
  constructor({ apiUrl, apiKey }) {
    this.baseApiUrl = `${apiUrl}/api/3`;
    this.baseHeaders = { 'Api-Token': apiKey };

    // Automations API`s
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
