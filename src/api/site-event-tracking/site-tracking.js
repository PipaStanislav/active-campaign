var axios = require('axios');

var { CONTENT_TYPE } = require('../../common/constants/headers');

class SiteTracking {
  constructor({ baseApiUrl, baseHeaders }) {
    this.baseHeaders = baseHeaders;
    this.baseApiUrl = baseApiUrl;
    this.apiUrl = `${this.baseApiUrl}/siteTracking`;
    this.apiDomainUrl = `${this.baseApiUrl}/siteTrackingDomains`;
  }

  addDomainToWhitelist(data) {
    if (!data) throw new Error('data is required');
    if (typeof data !== 'object') throw new Error('data must be an object');

    try {
      return axios.post(this.apiDomainUrl, data, {
        headers: {
          'Content-Type': CONTENT_TYPE.APPLICATION_X_WWW_FORM_URLENCODED,
          ...this.baseHeaders,
        },
      });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  retrieveCode() {
    try {
      return axios.get(`${this.apiUrl}/code`, { Accept: 'json', headers: this.baseHeaders });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  retrieveStatus() {
    try {
      return axios.get(`${this.apiUrl}`, { Accept: 'json', headers: this.baseHeaders });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  update(data) {
    if (!data) throw new Error('data is required');
    if (typeof data !== 'object') throw new Error('data must be an object');

    try {
      return axios.put(`${this.apiUrl}`, data, {
        headers: { 'Content-Type': CONTENT_TYPE.APPLICATION_JSON, ...this.baseHeaders },
      });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  removeDomainFromWhitelist(name) {
    if (!name) throw new Error('id is required');

    try {
      return axios.delete(`${this.apiDomainUrl}/${name}`, {
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

module.exports = SiteTracking;
