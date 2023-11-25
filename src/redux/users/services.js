import axios from "utils/requestHelper";

const get = (id) => axios.post(`/sponsors/${id}`);
const getAll = () => axios.get(`/users`);
const create = (data) => axios.post(`/users`, data);

const UserAPI = {
  get,
  getAll,
  create
};

export default UserAPI;
