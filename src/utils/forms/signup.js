import { emailValidation, passwordValidation, requireValidation } from "./validation";

export default {
    title: "Create new account",
    actionsText: "Sign up",
    link: {
        text: "Already have an acount? Sign in",
        ref: "/signin"
    },
    fields: [
        {
            accessor: "name",
            label: "Name",
            type: "text",
            validation: {
                check: requireValidation,
                message: "Name is required"
            }
        },
        {
            accessor: "email",
            label: "Email",
            type: "email",
            validation: {
                check: emailValidation,
                message: "Email is not valid"
            }
        },
        {
            accessor: "password",
            label: "Password",
            type: "password",
            validation: {
                check: passwordValidation,
                message: "Password must be more than 6 character"
            }
        },
    ]
}