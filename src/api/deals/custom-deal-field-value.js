var axios = require('axios');

var { CONTENT_TYPE } = require('../../common/constants/headers');

class CustomeDealFieldValue {
  constructor({ baseApiUrl, baseHeaders }) {
    this.baseHeaders = baseHeaders;
    this.baseApiUrl = baseApiUrl;
    this.apiUrl = `${this.baseApiUrl}/dealCustomFieldData`;
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

  update(id, data) {
    if (!id) throw new Error('id is required');
    if (!data) throw new Error('data is required');
    if (typeof data !== 'object') throw new Error('data must be an object');

    try {
      return axios.put(`${this.apiUrl}/${id}`, data, {
        headers: { 'Content-Type': CONTENT_TYPE.APPLICATION_JSON, ...this.baseHeaders },
      });
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

  bulkCreateCustomFieldValue(data) {
    if (!data) throw new Error('data is required');
    if (!Array.isArray(data)) throw new Error('data must be an array');

    for (var value of data) {
      if (typeof value !== 'object')
        throw new Error(
          `in array must be an objects, not ${!Array.isArray(value) ? typeof value : 'array'}`,
        );
    }

    try {
      return axios.post(`${this.apiUrl}/bulkCreate`, data, {
        headers: { 'Content-Type': CONTENT_TYPE.APPLICATION_JSON, ...this.baseHeaders },
      });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  bulkUploadCustomFieldValue(data) {
    if (!data) throw new Error('data is required');
    if (!Array.isArray(data)) throw new Error('data must be an array');

    for (var value of data) {
      if (typeof value !== 'object')
        throw new Error(
          `in array must be an objects, not ${!Array.isArray(value) ? typeof value : 'array'}`,
        );
    }

    try {
      return axios.put(`${this.apiUrl}/bulkUpdate`, data, {
        headers: { 'Content-Type': CONTENT_TYPE.APPLICATION_JSON, ...this.baseHeaders },
      });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }
}

module.exports = CustomeDealFieldValue;
