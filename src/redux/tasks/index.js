import { createSlice } from '@reduxjs/toolkit';
import adapter from './adapter';
import * as thunks from './thunks';
import * as selectors from './selectors';
import { getTask, getAllTasks } from './thunks';

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
      const { payload, meta } = action;
      const { data } = payload;
      if (!data.tasks) return;
      adapter.setAll(state, data.tasks);
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