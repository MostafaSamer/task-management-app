import { combineReducers } from 'redux';
import Users from './users';
// import Tasks from './tasks';

const rootReducer = () =>
  combineReducers({
    users: Users.slice.reducer,
    // tasks: Tasks.slice.reducer,
  });

export default rootReducer;
