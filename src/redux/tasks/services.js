import axios from '../../utils/requestHelper';

const getTask = (id) => axios.get(`/tasks/${id}`);

const getAllTasks = () => axios.get(`/tasks`);

const TasksAPI = {
  getTask,
  getAllTasks,
};

export default TasksAPI;
