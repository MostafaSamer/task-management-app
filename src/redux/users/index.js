import { createSlice } from '@reduxjs/toolkit';
import adapter from './adapter';
import * as selectors from './selectors';
import * as thunks from './thunks';

import {
  signIn,
  signUp
} from './thunks';

import { addToLocalStorage, loadFromLocalStorage, clearLocalStorage } from 'utils/localStorageHelpers';

export const slice = createSlice({
  name: 'users',
  initialState: adapter.getInitialState({
    messages: [],
    currentUser: loadFromLocalStorage('user'),
  }),
  reducers: {
    clearErrorMessage(state) {
      state.messages = [];
    },
    logout(state) {
      state.currentUser = undefined;
      clearLocalStorage();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      /*
        Get the authHeaders from API
        addToLocalStorage('authHeaders', authHeaders);
        */
      const { payload } = action;
      const { data } = payload;
      if (!data.user) return;
      state.currentUser = data.user;
      state.messages = [];
      addToLocalStorage('user', data.user);
    });
    
    builder.addCase(signIn.rejected, (state, action) => {
      state.messages.push(action.payload);
    });
    
    builder.addCase(signUp.rejected, (state, action) => {
      state.messages.push(action.payload);
    });
  }

})
const Users = {
  adapter,
  slice,
  thunks,
  selectors,
};
export default Users;