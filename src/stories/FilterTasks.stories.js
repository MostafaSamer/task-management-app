import FilterTasks from "components/molecules/FilterTasks";

import { Provider } from 'react-redux';
import store from '../redux/store';

export default {
    title: "Components/molecules/FilterTasks",
    component: FilterTasks,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
}

export const story = {
    decorators: [
        (Story) => (
            <Provider store={store}>
                <Story />
            </Provider>
        ),
    ],
};