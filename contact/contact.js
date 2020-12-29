const axios = require('axios');

class Contact {
  constructor({ baseApiUrl, headers }) {
    this.headers = headers;
    this.baseApiUrl = baseApiUrl;
    this.apiUrl = `${this.baseApiUrl}/contacts`;
  }

  create() {}

  createOrUpdate() {}

  retrieve() {}

  updateListStatus() {}

  update() {}

  delete() {}

  listAll(query) {
    try {
      return axios.get(this.apiUrl, {
        headers: { ...this.headers },
        params: query,
      });
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }

  listAllAutomations() {}

  retrieveContactsScoreValue() {}

  bulkImport() {}
}


module.exports = Contact;