import { createSelector } from '@reduxjs/toolkit';

export const getCurrentUser = createSelector(
  (state) => state?.users,
  (users) => users.currentUser,
);

export const getMessages = createSelector(
  (state) => state?.users,
  (users) => users.messages,
);