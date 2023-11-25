import Input from "components/atoms/input";

const onChange = () => {}

export default {
    title: "Components/atoms/Input",
    component: Input,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
}

export const email = {
    args: {
        accessor: "email",
        label: "Email",
        type: "email",
        value: "mostafa@email.com",
        onChange: onChange
    },
};

export const password = {
    args: {
        accessor: "password",
        label: "Password",
        type: "password",
        value: "Password",
        onChange: onChange
    },
};

export const dropdown = {
    args: {
        accessor: "dropdown",
        label: "Dropdown",
        type: "dropdown",
        value: "0",
        options: [
            { label: "All", value: 0 },
            { label: "Active", value: 1 },
            { label: "Completed", value: 2 },
        ],
        onChange: onChange
    },
};

export const withError = {
    args: {
        accessor: "email",
        label: "Email",
        type: "email",
        value: "mostafa@email.com",
        errors: "Invalid Email",
        onChange: onChange
    },
};