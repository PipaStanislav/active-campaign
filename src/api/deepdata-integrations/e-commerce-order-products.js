var axios = require('axios');

class ECommerceOrderProduct {
  constructor({ baseApiUrl, baseHeaders }) {
    this.baseHeaders = baseHeaders;
    this.baseApiUrl = baseApiUrl;
  }

  listEcomOrderProducts(query) {
    if (!!query && typeof query !== 'object') throw new Error('Query must be an object');

    try {
      return axios.get(`${this.baseApiUrl}/ecomOrderProducts`, {
        headers: { Accept: 'json', ...this.baseHeaders },
        params: query,
      });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  listEcomOrderProductsForSpecificEcomOrder(id, query) {
    if (!id) throw new Error('id is required');
    if (!!query && typeof query !== 'object') throw new Error('Query must be an object');

    try {
      return axios.get(`${this.baseApiUrl}/ecomOrders/${id}/orderProducts`, {
        headers: { Accept: 'json', ...this.baseHeaders },
        params: query,
      });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  retrieveEcomOrderProduct(id, query) {
    if (!id) throw new Error('id is required');
    if (!!query && typeof query !== 'object') throw new Error('Query must be an object');

    try {
      return axios.get(`${this.baseApiUrl}/ecomOrderProducts/${id}`, {
        headers: { Accept: 'json', ...this.baseHeaders },
        params: query,
      });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }
}

module.exports = ECommerceOrderProduct;
