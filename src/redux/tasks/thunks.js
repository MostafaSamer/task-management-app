import { createAsyncThunk } from '@reduxjs/toolkit';
import TasksAPI from './services';

export const getTask = createAsyncThunk('tasks/getTask', async (id, thunkAPI) => {
  try {
    const response = await TasksAPI.getTask(id);
    return { data: response.data };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.data);
  }
});

export const getAllTasks = createAsyncThunk('tasks/getAllTasks', async (params, thunkAPI) => {
  try {
    const response = await TasksAPI.getAllTasks(params);
    return { data: response.data };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.data);
  }
});
