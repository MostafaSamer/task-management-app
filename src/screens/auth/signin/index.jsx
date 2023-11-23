import Card from "components/molecules/Card"
import Form from "components/molecules/Form"
import styles from "./index.module.scss"
import signin from "utils/forms/signin"

const SignIn = () => {
    return (
        <div className={styles.signInWrapper}>
            <div className={styles.signIn}>
                <Card title={"Sign In"}>
                    <Form formFields={signin} />
                </Card>
            </div>
        </div>
    )
}

export default SignIn