import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import AddTask from 'components/molecules/AddTask';
import * as tasksThunks from 'redux/tasks/thunks';
import * as usersSelectors from 'redux/users/selectors';
import * as reactRedux from 'react-redux';

// jest.mock('redux/tasks/thunks');
jest.mock('redux/users/selectors');
jest.mock('redux/tasks/thunks', () => ({
    createTask: jest.fn().mockResolvedValue({}),
}));
jest.mock('react-redux', () => {
    const originalModule = jest.requireActual('react-redux');

    return {
        ...originalModule,
        useDispatch: jest.fn(),
    };
});

const mockStore = configureStore();

describe('AddTask Component', () => {
    let store;

    beforeEach(() => {
        store = mockStore({});
        usersSelectors.getCurrentUser.mockReturnValue({ id: 1 });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders AddTask component correctly', () => {
        const { getByText } = render(
            <Provider store={store}>
                <AddTask />
            </Provider>
        );

        expect(getByText('Add Task')).toBeInTheDocument();
    });

    it('dispatches createTask thunk on Add Task button click', async () => {
        const useDispatchSpy = jest.spyOn(reactRedux, 'useDispatch');
        useDispatchSpy.mockReturnValue(jest.fn());
        
        const { getByTestId } = render(
            <Provider store={store}>
                <AddTask />
            </Provider>
        );

        fireEvent.change(getByTestId('task-input'), { target: { value: 'New Task' } });
        fireEvent.click(getByTestId('buttonTestWrapper'));

        await waitFor(() => {
            expect(tasksThunks.createTask).toHaveBeenCalled();
            expect(tasksThunks.createTask).toHaveBeenCalledWith({
                title: 'New Task',
                userId: 1,
            });
            expect(store.getActions()).toEqual([]);
        });
    });

    it('does not dispatch createTask thunk when input is empty on Add Task button click', async () => {
        const { getByText } = render(
            <Provider store={store}>
                <AddTask />
            </Provider>
        );

        fireEvent.click(getByText('Add Task'));

        await waitFor(() => {
            expect(tasksThunks.createTask).not.toHaveBeenCalled();
            expect(store.getActions()).toEqual([]);
        });
    });
});
