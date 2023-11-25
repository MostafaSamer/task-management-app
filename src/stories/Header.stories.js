import Header from "components/molecules/Header";

import { Provider } from 'react-redux';
import store from '../redux/store';

export default {
    title: "Components/molecules/Header",
    component: Header,
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

export const story = {
    
};