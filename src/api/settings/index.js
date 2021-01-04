var Setting = require('./setting');

class Settings {
  constructor({ baseApiUrl, baseHeaders }) {
    this.baseApiUrl = baseApiUrl;
    this.baseHeaders = baseHeaders;

    // API`s
    this.setting = new Setting({
      baseApiUrl: this.baseApiUrl,
      baseHeaders: this.baseHeaders,
    });
  }
}

/**
 * Module exports.
 * @public
 */

module.exports = Settings;
