var axios = require('axios');

var { CONTENT_TYPE } = require('../../common/constants/headers');

class List {
  constructor({ baseApiUrl, baseHeaders }) {
    this.baseHeaders = baseHeaders;
    this.baseApiUrl = baseApiUrl;
    this.apiUrl = `${this.baseApiUrl}/lists`;
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

  retrieve(id) {
    if (!id) throw new Error('id is required');

    try {
      return axios.get(`${this.apiUrl}/${id}`, { Accept: 'json', headers: this.baseHeaders });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  delete(id) {
    if (!id) throw new Error('id is required');

    try {
      return axios.delete(`${this.apiUrl}/${id}`, {
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

  CreateListGroupPermission(data) {
    if (!data) throw new Error('data is required');
    if (typeof data !== 'object') throw new Error('data must be an object');

    try {
      return axios.post(`${this.baseApiUrl}/listGroups`, data, {
        headers: { 'Content-Type': CONTENT_TYPE.APPLICATION_JSON, ...this.baseHeaders },
      });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }
}

module.exports = List;
