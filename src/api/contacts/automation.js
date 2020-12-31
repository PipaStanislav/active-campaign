var axios = require('axios');

var { CONTENT_TYPE } = require('../../common/constants/headers');

class Automation {
  constructor({ baseApiUrl, baseHeaders }) {
    this.baseHeaders = baseHeaders;
    this.baseApiUrl = baseApiUrl;
    this.apiUrl = `${this.baseApiUrl}/contactAutomations`;
  }

  addContactToAutomation(data) {
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

  retrieveAutomationContactIsIn(id) {
    if (!id) throw new Error('id is required');

    try {
      return axios.get(`${this.baseApiUrl}/${id}`, {
        headers: { Accept: 'json', ...this.baseHeaders },
      });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  removeContactFromAutomation(id) {
    if (!id) throw new Error('id is required');

    try {
      return axios.delete(`${this.apiUrl}/${id}`, { ...this.baseHeaders });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  listAllAutomationsContactIsIn(query) {
    if (!!query && typeof query !== 'object') throw new Error('Query must be an object');

    try {
      return axios.get(`${this.baseApiUrl}`, {
        headers: { Accept: 'json', ...this.baseHeaders },
        params: query,
      });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }
}

module.exports = Automation;
