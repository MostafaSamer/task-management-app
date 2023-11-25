import Card from "components/molecules/Card"
import Form from "components/molecules/Form"
import styles from "./index.module.scss"
import signUpForm from "utils/forms/signup"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from 'react-router-dom';
import User from "redux/users"
import Alert from "components/atoms/Alert"
import { useEffect } from "react"

const SignUp = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const messages = useSelector(User.selectors.getMessages);

    const handleSignUp = (values) => {
        dispatch(User.thunks.signUp(values)).then((res) => {
            if (!res.error) redirect("/signin")
        });
    }

    const redirect = (path) => { history.push(path) }

    useEffect(() => {
        return () => dispatch(User.slice.actions.clearErrorMessage())
    }, [])

    return (
        <div className={styles.signUpWrapper}>
            <div className={styles.signUp}>
                <Card title={signUpForm.title}>
                    {messages.map(m => <Alert message={m.message} type={m.type} />)}
                    <Form
                        actionsText={signUpForm.actionsText}
                        link={signUpForm.link}
                        fields={signUpForm.fields}
                        onSubmit={handleSignUp} />
                </Card>
            </div>
        </div>
    )
}

export default SignUp