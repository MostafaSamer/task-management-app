import { createSlice } from '@reduxjs/toolkit';
import adapter from './adapter';
import * as selectors from './selectors';
import * as thunks from './thunks';

import {
  signIn,
} from './thunks';

import { addToLocalStorage, loadFromLocalStorage, clearLocalStorage } from 'utils/localStorageHelpers';

export const slice = createSlice({
  name: 'users',
  initialState: adapter.getInitialState({
    messages: [],
    currentUser: loadFromLocalStorage('user'),
  }),
  reducers: {
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
     debugger
      const { payload } = action;
      const { data } = payload;
      if (!data.user) return;
      state.currentUser = data.user;
      addToLocalStorage('user', data.user);
    });
    
    builder.addCase(signIn.rejected, (state) => {
      debugger
      state.messages = [];
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