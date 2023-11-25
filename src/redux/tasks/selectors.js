import { createSelector } from "@reduxjs/toolkit";

export const getTasks = createSelector(
  (state) => state.tasks,
  (tasks) => tasks.tasks,
);