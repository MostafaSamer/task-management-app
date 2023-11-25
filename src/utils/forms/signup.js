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
            type: "text"
        },
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