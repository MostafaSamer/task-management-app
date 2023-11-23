import Card from "components/molecules/Card"
import Form from "components/molecules/Form"
import styles from "./index.module.scss"
import signUpForm from "utils/forms/signup"

const SignUp = () => {
    return (
        <div className={styles.signUpWrapper}>
            <div className={styles.signUp}>
                <Card title={signUpForm.title}>
                    <Form
                        actionsText={signUpForm.actionsText}
                        link={signUpForm.link}
                        fields={signUpForm.fields} />
                </Card>
            </div>
        </div>
    )
}

export default SignUp