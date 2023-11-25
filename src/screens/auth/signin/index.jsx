import Card from "components/molecules/Card"
import Form from "components/molecules/Form"
import styles from "./index.module.scss"
import signInForm from "utils/forms/signin"
import User from 'redux/users';
import { useDispatch, useSelector } from "react-redux"
import Alert from "components/atoms/Alert";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const SignIn = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const messages = useSelector(User.selectors.getMessages);

    const handleSignIn = (values) => {
        dispatch(User.thunks.signIn(values)).then((res) => {
            if (!res.error) redirect("/")
        });
    }

    const redirect = (path) => { history.push(path) }

    useEffect(() => {
        return () => dispatch(User.slice.actions.clearErrorMessage())
    }, [])

    return (
        <div className={styles.signInWrapper}>
            <div className={styles.signIn}>
                <Card title={signInForm.title}>
                    {messages.map(m => <Alert message={m.message} type={m.type} />)}
                    <Form
                        actionsText={signInForm.actionsText}
                        link={signInForm.link}
                        fields={signInForm.fields}
                        onSubmit={handleSignIn} />
                </Card>
            </div>
        </div>
    )
}

export default SignIn