import Util from "./Utils";
const axios = require("axios");
const Utils = new Util();
class API {
  constructor({ url }) {
    this.url = url;
    this.endpoints = {};
  }
  /**
   * Create and store a single entity's endpoints
   * @param {A entity Object} entity
   */

  createEntity(entity) {
    this.endpoints[entity.name] = this.createBasicCRUDEndpoints(entity);
  }

  createEntities(arrayOfEntity) {
    arrayOfEntity.forEach(this.createEntity.bind(this));
  }

  /**
   * Create the basic endpoints handlers for CRUD operations
   * @param {A entity Object} entity
   */
  createBasicCRUDEndpoints({ name }) {
    var endpoints = {};

    const resourceURL = `${this.url}/${name}`;

    endpoints.getAll = (params = {}) =>
      axios.get(resourceURL, {
        headers: { Authorization: "Bearer " + Utils.getToken() },
        params: params
      });

    endpoints.getOne = ({ id }) =>
      axios.get(`${resourceURL}/${id}`, {
        headers: { Authorization: "Bearer " + Utils.getToken() }
      });

    endpoints.create = toCreate => {
      return axios.post(resourceURL, toCreate, {
        headers: { Authorization: "Bearer " + Utils.getToken() }
      });
    };

    endpoints.update = toUpdate =>
      axios.put(`${resourceURL}/${toUpdate.id}`, toUpdate, {
        headers: { Authorization: "Bearer " + Utils.getToken() }
      });

    endpoints.patch = ({ id }, toPatch) =>
      axios.patch(`${resourceURL}/${id}`, toPatch, {
        headers: { Authorization: "Bearer " + Utils.getToken() }
      });

    endpoints.delete = ({ id }) =>
      axios.delete(`${resourceURL}/${id}`, {
        headers: { Authorization: "Bearer " + Utils.getToken() }
      });

    return endpoints;
  }
}

export default API;
