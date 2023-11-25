import ListTasks from 'components/molecules/ListTasks';
import Provider from '../provider';
import store from './store';

export default {
    title: "Components/molecules/ListTasks",
    component: ListTasks,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
    decorators: [(story) => <Provider store={store}>{story()}</Provider>],
}

export const story = {};