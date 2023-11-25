import axios from '../../utils/requestHelper';

const getTask = (id) => axios.get(`/tasks/${id}`);

const getAllTasks = () => axios.get(`/tasks`);

const createTask = (data) => axios.post(`/tasks`, data);

const TasksAPI = {
  getTask,
  getAllTasks,
  createTask,
};

export default TasksAPI;
