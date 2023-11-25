import Alert from "components/atoms/Alert";

export default {
    title: "Components/atoms/Alert",
    component: Alert,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
}

export const Success = {
    args: {
        message: "Task added successfully",
        type: "success"
    },
};

export const Error = {
    args: {
        message: "Invalid login credentials. Please try again.",
        type: "error"
    },
};