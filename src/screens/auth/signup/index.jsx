import Card from "components/molecules/Card"
import Form from "components/molecules/Form"
import styles from "./index.module.scss"
import signup from "utils/forms/signup"

const SignUp = () => {
    return (
        <div className={styles.signUpWrapper}>
            <div className={styles.signUp}>
                <Card title={"Sign Up"}>
                    <Form formFields={signup} />
                </Card>
            </div>
        </div>
    )
}

export default SignUp