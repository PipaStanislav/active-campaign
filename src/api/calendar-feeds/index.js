var CalendarFeed = require('./calendar-feed');

class CalendarFeeds {
  constructor({ baseApiUrl, baseHeaders }) {
    this.baseApiUrl = baseApiUrl;
    this.baseHeaders = baseHeaders;

    // Contacts API`s
    this.calendarFeed = new CalendarFeed({
      baseApiUrl: this.baseApiUrl,
      baseHeaders: this.baseHeaders,
    });
  }
}

/**
 * Module exports.
 * @public
 */

module.exports = CalendarFeeds;
