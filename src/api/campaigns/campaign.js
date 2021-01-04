var axios = require('axios');

class Campaign {
  constructor({ baseApiUrl, baseHeaders }) {
    this.baseHeaders = baseHeaders;
    this.baseApiUrl = baseApiUrl;
    this.apiUrl = `${this.baseApiUrl}/campaigns`;
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

  retrieveLinksAssociatedToCampaign(id) {
    if (!id) throw new Error('id is required');

    try {
      return axios.get(`${this.apiUrl}/${id}/links`, { Accept: 'json', headers: this.baseHeaders });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  retrieveCampaign(id) {
    if (!id) throw new Error('id is required');

    try {
      return axios.get(`${this.apiUrl}/${id}`, { Accept: 'json', headers: this.baseHeaders });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }
}

module.exports = Campaign;
