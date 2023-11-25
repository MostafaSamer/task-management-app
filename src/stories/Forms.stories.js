import Form from 'components/molecules/Form';

import Provider from '../provider';
import store from './store';
import signInForm from "utils/forms/signin"

export default {
    title: "Components/molecules/Form",
    component: Form,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen',
    },
    decorators: [
        (Story) => (
            <Provider store={store}>
                <Story />
            </Provider>
        ),
    ],
}

const onSubmit = () => {  }

export const story = {
    args: {
        actionsText: signInForm.actionsText,
        link: signInForm.link,
        fields: signInForm.fields,
        onSubmit: onSubmit
    },
};