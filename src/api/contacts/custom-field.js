var axios = require('axios');

var { CONTENT_TYPE } = require('../../common/constants/headers');

class CustomField {
  constructor({ baseApiUrl, baseHeaders }) {
    this.baseHeaders = baseHeaders;
    this.baseApiUrl = baseApiUrl;
    this.apiUrl = `${this.baseApiUrl}/fields`;
  }

  createCustomField(data) {
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

  retrieveCustomField(id) {
    if (!id) throw new Error('id is required');

    try {
      return axios.get(`${this.baseApiUrl}/${id}`, {
        Accept: 'json',
        headers: this.baseHeaders,
      });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  updateCustomField(id, data) {
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

  deleteCustomField(id) {
    if (!id) throw new Error('id is required');

    try {
      return axios.delete(`${this.baseApiUrl}/${id}`, { headers: this.baseHeaders });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  listAllCustomFields(query) {
    if (!!query && typeof query !== 'object') throw new Error('Query must be an object');

    try {
      return axios.get(`${this.apiUrl}`, {
        Accept: 'json',
        headers: this.baseHeaders,
        params: query,
      });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  createCustomFieldRelationshipToList(data) {
    if (!data) throw new Error('data is required');
    if (typeof data !== 'object') throw new Error('data must be an object');

    try {
      return axios.post(`${this.baseApiUrl}/fieldRels`, data, {
        headers: { 'Content-Type': CONTENT_TYPE.APPLICATION_JSON, ...this.baseHeaders },
      });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  createCustomFieldOptions(data) {
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
}

module.exports = CustomField;
