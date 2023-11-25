import Card from "components/molecules/Card"
import Form from "components/molecules/Form"
import styles from "./index.module.scss"
import signInForm from "utils/forms/signin"
import User from 'redux/users';
import { useDispatch } from "react-redux"

const SignIn = () => {

    const dispatch = useDispatch();

    const handleSignIn = (values) => {
        dispatch(User.thunks.signIn(values)).then((res) => {
            console.log("RES...", res)
            if (res.error) {
                console.log("ERROR...", res)
            } else {
                console.log("DONE...", res)
            }
        });
    }

    return (
        <div className={styles.signInWrapper}>
            <div className={styles.signIn}>
                <Card title={signInForm.title}>
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