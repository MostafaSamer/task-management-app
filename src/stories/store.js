import {
    configureStore,
    createSlice,
    createAsyncThunk,
} from '@reduxjs/toolkit';

const TasksData = {
    tasks: [],
};

const UserData = {
    messages: [],
    currentUser: {
        name: "Samir",
        email: "samer@email.com",
        password: "password",
        id: 2
    },
};

export const getAllTasks = createAsyncThunk('tasks/getAllTasks', async () => {});

const TasksSlice = createSlice({
    name: 'tasks',
    initialState: TasksData,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getAllTasks.fulfilled, (state, action) => {
                state.tasks = [
                    { id: 1, title: "Mostafa", completed: false },
                    { id: 2, title: "Samir", completed: true },
                ];
            })
    },
});

const UsersSlice = createSlice({
    name: 'users',
    initialState: UserData,
    reducers: {
        clearErrorMessage: (state) => {
            state.messages = [];
        },
        logout: (state) => {
            state.currentUser = undefined;
        },
    },
    extraReducers(builder) {},
});

const store = configureStore({
    reducer: {
        tasks: TasksSlice.reducer,
        users: UsersSlice.reducer
    },
});

export default store;
