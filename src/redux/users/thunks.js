import { createAsyncThunk } from '@reduxjs/toolkit';
import UsersAPI from './services';

export const signIn = createAsyncThunk('users/signIn', async (data, { rejectWithValue }) => {
  try {
    const response = await UsersAPI.getAll();
    // BACKEND
    let { email, password } = data;
    let users = response.data;
    let user = users.find(u => u.email === email && u.password === password);
    if (user)
      return { data: { user } };
    else
      return rejectWithValue({
        type: "error",
        message: "Invalid login credentials. Please try again.",
      });
  } catch (err) {
    return rejectWithValue(err.response.data.errors);
  }
});

export const signUp = createAsyncThunk('users/signUp', async (data, thunkAPI) => {
  try {
    const response = await UsersAPI.create(data);
    return { data: response.data };
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});