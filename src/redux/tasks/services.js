import axios from '../../utils/requestHelper';

const getTask = (id) => axios.get(`/tasks/${id}`);

const getAllTasks = (params) => axios.get(`/tasks?${new URLSearchParams(params).toString()}`);

const createTask = (data) => axios.post(`/tasks`, data);

const deleteTask = (id) => axios.delete(`/tasks/${id}`);

const updateTask = (id, data) => axios.put(`/tasks/${id}`, data);

const TasksAPI = {
  getTask,
  getAllTasks,
  createTask,
  deleteTask,
  updateTask,
};

export default TasksAPI;
