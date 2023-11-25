import { createSlice } from '@reduxjs/toolkit';
import adapter from './adapter';
import * as thunks from './thunks';
import * as selectors from './selectors';
import { getTask, getAllTasks, createTask, deleteTask, markTask, updateTask } from './thunks';

export const slice = createSlice({
  name: 'tasks',
  initialState: adapter.getInitialState({}),
  extraReducers: (builder) => {
    builder.addCase(getTask.fulfilled, (state, action) => {
      const { payload } = action;
      const { data } = payload;
      if (!data.task) return;
      adapter.setOne(state, data.task);
    });
    builder.addCase(getAllTasks.fulfilled, (state, action) => {
      const { payload } = action;
      if (!payload.data) return;
      state.tasks = payload.data;
      adapter.setAll(state, payload.data);
    });
    builder.addCase(createTask.fulfilled, (state, action) => {
      const { payload } = action;
      if (!payload.data) return;
      state.tasks.push(payload.data);
    });
    builder.addCase(deleteTask.fulfilled, (state, action) => {
      const { payload } = action;
      state.tasks = state.tasks.filter(t => t.id !== payload.data);
    });
    builder.addCase(markTask.fulfilled, (state, action) => {
      const { payload } = action;
      const { data } = payload;
      const task = state.tasks.find(t => t.id == data.id);
      Object.assign(task, data);
    });
    builder.addCase(updateTask.fulfilled, (state, action) => {
      const { payload } = action;
      const { data } = payload;
      const task = state.tasks.find(t => t.id == data.id);
      Object.assign(task, data);
    });
  },
});

const Tasks = {
  adapter,
  slice,
  thunks,
  selectors,
};
export default Tasks;