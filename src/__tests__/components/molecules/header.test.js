// __tests__/components/molecules/header.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Header from 'components/molecules/Header';
import * as usersSelectors from 'redux/users/selectors';
import * as reactRedux from 'react-redux';
import * as userSlice from 'redux/users';

jest.mock('redux/users/selectors');
jest.mock('redux/tasks/thunks', () => ({
    createTask: jest.fn().mockResolvedValue({}),
    logout: jest.fn()
}));
jest.mock('react-redux', () => {
    const originalModule = jest.requireActual('react-redux');

    return {
        ...originalModule,
        useDispatch: jest.fn(),
    };
});

const mockStore = configureStore();

describe('Header Component', () => {
    let store;
    const mockUser = {
        id: '1',
        name: 'Test User',
    };

    beforeEach(() => {
        store = mockStore({});
        jest.spyOn(console, 'error').mockImplementation(() => { }); // Suppress console errors
        usersSelectors.getCurrentUser.mockReturnValue(mockUser);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders the Header component with user name', () => {
        render(
            <Provider store={store}>
                <Header />
            </Provider>
        );

        expect(screen.getByText('Task Management System')).toBeInTheDocument();
        expect(screen.getByText('Test User')).toBeInTheDocument();
    });

    it('dispatches logout action on Logout button click', () => {
        const useDispatchSpy = jest.spyOn(reactRedux, 'useDispatch');
        useDispatchSpy.mockReturnValue(jest.fn());
        
        render(
            <Provider store={store}>
                <Header />
            </Provider>
        );

        const logoutButton = screen.getByText('Logout');
        fireEvent.click(logoutButton);

        expect(console.error).not.toHaveBeenCalled();
    });
});
