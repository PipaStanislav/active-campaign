var axios = require('axios');

var { CONTENT_TYPE } = require('../../common/constants/headers');

class Setting {
  constructor({ baseApiUrl, baseHeaders }) {
    this.baseHeaders = baseHeaders;
    this.baseApiUrl = baseApiUrl;
    this.apiUrl = `${this.baseApiUrl}/configs`;
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
}

module.exports = Setting;
