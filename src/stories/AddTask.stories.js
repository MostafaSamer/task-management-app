import AddTask from 'components/molecules/AddTask';

import Provider from '../provider';
import store from './store';

export default {
    title: "Components/molecules/AddTask",
    component: AddTask,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },decorators: [
        (Story) => (
            <Provider store={store}>
                <Story />
            </Provider>
        ),
    ],
}

export const story = {};