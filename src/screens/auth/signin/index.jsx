import Card from "components/molecules/Card"
import Form from "components/molecules/Form"
import styles from "./index.module.scss"
import signInForm from "utils/forms/signin"

const SignIn = () => {
    return (
        <div className={styles.signInWrapper}>
            <div className={styles.signIn}>
                <Card title={signInForm.title}>
                    <Form actionsText={signInForm.actionsText} fields={signInForm.fields} />
                </Card>
            </div>
        </div>
    )
}

export default SignIn