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
            type: "email"
        },
        {
            accessor: "password",
            label: "Password",
            type: "password"
        },
    ]
}