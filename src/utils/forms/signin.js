import { emailValidation, passwordValidation } from "./validation";

export default {
    title: "Sign in",
    actionsText: "Login",
    link: {
        text: "Don’t have an account? Sign up",
        ref: "/signup"
    },
    fields: [
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