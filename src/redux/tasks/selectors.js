import adapter from './adapter';

export const tasksSelectors = {
  ...adapter.getSelectors((state) => state.tasks),
};