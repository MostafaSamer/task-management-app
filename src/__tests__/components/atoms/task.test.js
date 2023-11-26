import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Task from 'components/atoms/Task';
import * as reactRedux from 'react-redux';

const mockStore = configureStore();

jest.mock('react-redux', () => {
    const originalModule = jest.requireActual('react-redux');

    return {
        ...originalModule,
        useDispatch: jest.fn(),
    };
});

describe('Task Component', () => {
    let store;
    const task = {
        id: '1',
        title: 'Test Task',
        completed: false,
    };

    beforeEach(() => {
        store = mockStore({});
    });

    it('renders task correctly', () => {
        const { getByText } = render(
            <Provider store={store}>
                <Task task={task} />
            </Provider>
        );

        const renderedTask = getByText('Test Task');
        expect(renderedTask).toBeInTheDocument();
    });

    it('marks task as completed on checkbox click', () => {
        const useDispatchSpy = jest.spyOn(reactRedux, 'useDispatch');
        useDispatchSpy.mockReturnValue(jest.fn());

        const { getByTestId } = render(
            <Provider store={store}>
                <Task task={task} />
            </Provider>
        );

        const checkbox = getByTestId('mark-input');
        fireEvent.click(checkbox);

        expect(useDispatchSpy).toHaveBeenCalled();
        useDispatchSpy.mockRestore();
    });

    it('enters edit mode on "Edit" button click', () => {
        const { getByText } = render(
            <Provider store={store}>
                <Task task={task} />
            </Provider>
        );

        const editButton = getByText('Edit');
        fireEvent.click(editButton);

        expect(store.getActions()).toEqual([]);
    });

    it('saves edited task on "Save" button click', () => {
        const useDispatchSpy = jest.spyOn(reactRedux, 'useDispatch');
        useDispatchSpy.mockReturnValue(jest.fn());

        const { getByText } = render(
            <Provider store={store}>
                <Task task={task} />
            </Provider>
        );

        const editButton = getByText('Edit');
        fireEvent.click(editButton);

        const saveButton = getByText('Save');
        fireEvent.click(saveButton);

        expect(useDispatchSpy).toHaveBeenCalled();
        useDispatchSpy.mockRestore();
    });

    it('discards edited task on "Discard" button click', () => {
        const { getByText } = render(
            <Provider store={store}>
                <Task task={task} />
            </Provider>
        );

        const editButton = getByText('Edit');
        fireEvent.click(editButton);

        const discardButton = getByText('Discard');
        fireEvent.click(discardButton);

        expect(store.getActions()).toEqual([]);
    });

    it('deletes task on "Delete" button click', () => {
        const useDispatchSpy = jest.spyOn(reactRedux, 'useDispatch');
        useDispatchSpy.mockReturnValue(jest.fn());

        const { getByText } = render(
            <Provider store={store}>
                <Task task={task} />
            </Provider>
        );

        const deleteButton = getByText('Delete');
        fireEvent.click(deleteButton);

        expect(useDispatchSpy).toHaveBeenCalled();
        useDispatchSpy.mockRestore();
    });
});
