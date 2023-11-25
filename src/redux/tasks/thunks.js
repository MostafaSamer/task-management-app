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

export const createTask = createAsyncThunk('tasks/createTask', async (data, thunkAPI) => {
  try {
    const params = {
      title: data,
      completed: false,
      userId: 1
    }
    const response = await TasksAPI.createTask(params);
    return { data: response.data };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.data);
  }
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (id, thunkAPI) => {
  try {
    const response = await TasksAPI.deleteTask(id);
    return { data: id };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.data);
  }
});

export const markTask = createAsyncThunk('tasks/markTask', async (data, thunkAPI) => {
  try {
    const {id, task} = data;
    const response = await TasksAPI.updateTask(id, task);
    return { data: response.data };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.data);
  }
});
