import CtaButton from "components/atoms/CtaButton";

export default {
    title: "Components/atoms/CtaButton",
    component: CtaButton,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
}

export const primary = {
    args: {
        text: "Submit",
        style: "primary"
    },
};

export const secondary = {
    args: {
        text: "Submit",
        style: "secondary"
    },
};

export const success = {
    args: {
        text: "Submit",
        style: "success"
    },
};

export const danger = {
    args: {
        text: "Submit",
        style: "danger"
    },
};