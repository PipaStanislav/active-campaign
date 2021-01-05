var axios = require('axios');

class Template {
  constructor({ baseApiUrl, baseHeaders }) {
    this.baseHeaders = baseHeaders;
    this.baseApiUrl = baseApiUrl;
    this.apiUrl = `${this.baseApiUrl}/templates`;
  }

  retrieve(id) {
    if (!id) throw new Error('id is required');

    try {
      return axios.get(`${this.apiUrl}/${id}`, { Accept: 'json', headers: this.baseHeaders });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }
}

module.exports = Template;
