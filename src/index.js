var Accounts = require('./api/accounts');
var Addresses = require('./api/addresses');
var Automations = require('./api/automations');
var Brandings = require('./api/brandings');
var CalendarFeed = require('./api/calendar-feeds');
var Campaign = require('./api/campaigns');
var Contacts = require('./api/contacts');
var Deals = require('./api/deals');
var DeepdataIntegrations = require('./api/deepdata-integrations');
var Forms = require('./api/forms');
var Lists = require('./api/lists');
var Notes = require('./api/notes');
var Organizations = require('./api/organizations');
var SavedResponses = require('./api/saved-responses');
var Scores = require('./api/scores');
var Segments = require('./api/segments');
var Settings = require('./api/settings');
var SiteEventTracking = require('./api/site-event-tracking');
var Tags = require('./api/tags');
var Tasks = require('./api/tasks');
var TaskTypes = require('./api/task-types');

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
    this.forms = new Forms({ baseApiUrl: this.baseApiUrl, baseHeaders: this.baseHeaders });
    this.lists = new Lists({ baseApiUrl: this.baseApiUrl, baseHeaders: this.baseHeaders });
    this.notes = new Notes({ baseApiUrl: this.baseApiUrl, baseHeaders: this.baseHeaders });
    this.organizations = new Organizations({
      baseApiUrl: this.baseApiUrl,
      baseHeaders: this.baseHeaders,
    });
    this.savedResponses = new SavedResponses({
      baseApiUrl: this.baseApiUrl,
      baseHeaders: this.baseHeaders,
    });
    this.scores = new Scores({ baseApiUrl: this.baseApiUrl, baseHeaders: this.baseHeaders });
    this.segments = new Segments({ baseApiUrl: this.baseApiUrl, baseHeaders: this.baseHeaders });
    this.settings = new Settings({ baseApiUrl: this.baseApiUrl, baseHeaders: this.baseHeaders });
    this.siteEventTrecking = new SiteEventTracking({
      baseApiUrl: this.baseApiUrl,
      baseHeaders: this.baseHeaders,
    });
    this.tags = new Tags({ baseApiUrl: this.baseApiUrl, baseHeaders: this.baseHeaders });
    this.tasks = new Tasks({ baseApiUrl: this.baseApiUrl, baseHeaders: this.baseHeaders });
    this.taskTypes = new TaskTypes({ baseApiUrl: this.baseApiUrl, baseHeaders: this.baseHeaders });
  }
}

/**
 * Module exports.
 * @public
 */

module.exports = ActiveCampaign;
