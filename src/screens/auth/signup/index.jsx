import Card from "components/molecules/Card"
import Form from "components/molecules/Form"
import styles from "./index.module.scss"

const SignUp = () => {
    return (
        <div className={styles.signUpWrapper}>
            <div className={styles.signUp}>
                <Card title={"Sign Up"}>
                    <Form />
                </Card>
            </div>
        </div>
    )
}

export default SignUp