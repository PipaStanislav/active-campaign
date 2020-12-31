var axios = require('axios');

class EmailActivities {
  constructor({ baseApiUrl, baseHeaders }) {
    this.baseHeaders = baseHeaders;
    this.baseApiUrl = baseApiUrl;
    this.apiUrl = `${this.baseApiUrl}/fieldValues`;
  }

  listAllEmailActivities(query) {
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
}

module.exports = EmailActivities;
