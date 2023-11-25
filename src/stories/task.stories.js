import Task from "components/atoms/Task";

import Provider from '../provider';
import store from '../redux/store';


export default {
    title: "Components/atoms/Task",
    component: Task,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
}

export const active = {
    args: {
        task: {
            id: 1,
            title: "This is an active task",
            completed: false
        }
    },
    decorators: [
        (Story) => (
            <Provider store={store}>
                <Story />
            </Provider>
        ),
    ],
};
export const completed = {
    args: {
        task: {
            id: 1,
            title: "This is an completed task",
            completed: true
        }
    },
    decorators: [
        (Story) => (
            <Provider store={store}>
                <Story />
            </Provider>
        ),
    ],
};