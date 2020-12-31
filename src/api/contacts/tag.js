var axios = require('axios');

var { CONTENT_TYPE } = require('../../common/constants/headers');

class CustomFieldValues {
  constructor({ baseApiUrl, baseHeaders }) {
    this.baseHeaders = baseHeaders;
    this.baseApiUrl = baseApiUrl;
    this.apiUrl = `${this.baseApiUrl}/contactTags`;
  }

  addTagToContact(data) {
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

  removeTagFromContact(id) {
    if (!id) throw new Error('id is required');

    try {
      return axios.delete(`${this.apiUrl}/${id}`, { headers: this.baseHeaders });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }
}

module.exports = CustomFieldValues;
