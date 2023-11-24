export default {
    title: "Create new account",
    actionsText: "Sign up",
    link: {
        text: "Already have an acount? Sign in",
        ref: "/signin"
    },
    fields: [
        {
            name: "name",
            label: "Name",
            type: "text"
        },
        {
            name: "email",
            label: "Email",
            type: "email"
        },
        {
            name: "password",
            label: "Password",
            type: "password"
        },
    ]
}