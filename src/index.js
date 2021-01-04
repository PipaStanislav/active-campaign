var Accounts = require('./api/accounts');
var Addresses = require('./api/addresses');
var Automations = require('./api/automations');
var Brandings = require('./api/brandings');
var CalendarFeed = require('./api/calendar-feeds');
var Campaign = require('./api/campaigns');
var Contacts = require('./api/contacts');
var Deals = require('./api/deals');
var DeepdataIntegrations = require('./api/deepdata-integrations');

class ActiveCampaign {
  constructor({ apiUrl, apiKey }) {
    this.baseApiUrl = `${apiUrl}/api/3`;
    this.baseHeaders = { 'Api-Token': apiKey };

    // API`s
    this.accounts = new Accounts({ baseApiUrl: this.baseApiUrl, baseHeaders: this.baseHeaders });
    this.addresses = new Addresses({ baseApiUrl: this.baseApiUrl, baseHeaders: this.baseHeaders });
    this.automations = new Automations({
      baseApiUrl: this.baseApiUrl,
      baseHeaders: this.baseHeaders,
    });
    this.brandings = new Brandings({
      baseApiUrl: this.baseApiUrl,
      baseHeaders: this.baseHeaders,
    });
    this.calendarFeed = new CalendarFeed({
      baseApiUrl: this.baseApiUrl,
      baseHeaders: this.baseHeaders,
    });
    this.campaign = new Campaign({ baseApiUrl: this.baseApiUrl, baseHeaders: this.baseHeaders });
    this.contacts = new Contacts({ baseApiUrl: this.baseApiUrl, baseHeaders: this.baseHeaders });
    this.deals = new Deals({ baseApiUrl: this.baseApiUrl, baseHeaders: this.baseHeaders });
    this.deepdataIntegrations = new DeepdataIntegrations({
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
