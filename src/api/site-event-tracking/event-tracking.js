var axios = require('axios');

var { CONTENT_TYPE } = require('../../common/constants/headers');

class EventTracking {
  constructor({ baseApiUrl, baseHeaders }) {
    this.baseHeaders = baseHeaders;
    this.baseApiUrl = baseApiUrl;
    this.apiUrl = `${this.baseApiUrl}/eventTrackingEvents`;
    this.trackEventUrl = 'https://trackcmp.net/event';
  }

  trackEvent(data) {
    if (!data) throw new Error('data is required');
    if (typeof data !== 'object') throw new Error('data must be an object');

    try {
      return axios.post(this.trackEventUrl, data, {
        headers: {
          'Content-Type': CONTENT_TYPE.APPLICATION_X_WWW_FORM_URLENCODED,
          ...this.baseHeaders,
        },
      });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  create(data) {
    if (!data) throw new Error('data is required');
    if (typeof data !== 'object') throw new Error('data must be an object');

    try {
      return axios.post(this.apiUrl, data, {
        headers: { 'Content-Type': CONTENT_TYPE.APPLICATION_JSON, ...this.baseHeaders },
      });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  retrieveStatus(id) {
    if (!id) throw new Error('id is required');

    try {
      return axios.get(`${this.baseApiUrl}/eventTracking`, {
        Accept: 'json',
        headers: this.baseHeaders,
      });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  update(data) {
    if (!data) throw new Error('data is required');
    if (typeof data !== 'object') throw new Error('data must be an object');

    try {
      return axios.put(`${this.baseApiUrl}/eventTracking`, data, {
        headers: { 'Content-Type': CONTENT_TYPE.APPLICATION_JSON, ...this.baseHeaders },
      });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  delete(name) {
    if (!name) throw new Error('id is required');

    try {
      return axios.delete(`${this.apiUrl}/${name}`, {
        headers: this.baseHeaders,
      });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  listAll(query) {
    if (!!query && typeof query !== 'object') throw new Error('Query must be an object');

    try {
      return axios.get(this.apiUrl, {
        headers: { Accept: 'json', ...this.baseHeaders },
        params: query,
      });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }
}

module.exports = EventTracking;
