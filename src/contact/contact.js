var axios = require('axios');

var { CONTENT_TYPE } = require('../common/constants/headers-constants');

class Contact {
  constructor({ baseApiUrl, baseHeaders }) {
    this.baseHeaders = baseHeaders;
    this.baseApiUrl = baseApiUrl;
    this.apiUrl = `${this.baseApiUrl}/contacts`;
  }

  create(data) {
    if (typeof data !== 'object') throw new Error('Data must be an object');

    try {
      return axios.post(this.apiUrl, data, {
        headers: { 'Content-Type': CONTENT_TYPE.APPLICATION_JSON, ...this.headers },
      });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  createOrUpdate(data) {
    if (typeof data !== 'object') throw new Error('Data must be an object');

    try {
      return axios.post(`${this.baseApiUrl}/contact/sync`, data, {
        headers: { 'Content-Type': CONTENT_TYPE.APPLICATION_JSON, ...this.headers },
      });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  retrieve(id) {
    if (!id) throw new Error('id is required');

    try {
      return axios.get(`${this.apiUrl}/${id}`, { headers: this.headers });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  updateListStatus(data) {
    if (typeof data !== 'object') throw new Error('Data must be an object');

    try {
      return axios.post(`${this.baseApiUrl}/contactLists`, data, {
        headers: { 'Content-Type': CONTENT_TYPE.APPLICATION_JSON, ...this.headers },
      });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  update(id, data) {
    if (!id) throw new Error('id is required');
    if (typeof data !== 'object') throw new Error('Data must be an object');

    try {
      return axios.put(`${this.apiUrl}/${id}`, data, {
        headers: { 'Content-Type': CONTENT_TYPE.APPLICATION_JSON, ...this.headers },
      });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  delete(id) {
    if (!id) throw new Error('id is required');

    try {
      return axios.delete(`${this.apiUrl}/${id}`, {
        headers: this.headers,
      });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  listAll(query) {
    if (typeof query !== 'object') throw new Error('Query must be an object');

    try {
      return axios.get(this.apiUrl, {
        headers: { Accept: 'json', ...this.headers },
        params: query,
      });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  listAllAutomations(id) {
    if (!id) throw new Error('id is required');

    try {
      return axios.get(`${this.apiUrl}/${id}/contactAutomations`, {
        headers: { Accept: 'json', ...this.headers },
      });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  retrieveContactsScoreValue(id) {
    if (!id) throw new Error('id is required');

    try {
      return axios.get(`${this.apiUrl}/${id}/scoreValues`, {
        headers: { Accept: 'json', ...this.headers },
      });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  bulkImport(data) {
    if (typeof data !== 'object') throw new Error('Data must be an object');

    try {
      return axios.post(`${this.baseApiUrl}/import/bulk_import`, data, {
        headers: { Accept: 'json', ...this.headers },
      });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }
}

module.exports = Contact;
