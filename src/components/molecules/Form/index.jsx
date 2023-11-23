import Input from "components/atoms/input"
import styles from "./index.module.scss"
import { Fragment, useState } from "react"
import CtaButton from "components/atoms/CtaButton"

const Form = ({ formFields, onSubmit }) => {

    const [formData, setFormData] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Call onSubmit()...", formData)
    }

    const handleChange = (label, value) => {
        setFormData((prevData) => {
            return {
                ...prevData,
                [label]: value.target.value
            }
        })
    }

    const renderInput = (field) => <>
    <div className={styles.inputWrapper}>
        <Input
        name={field.name}
        label={field.label}
        type={field.type}
        value={formData[field.label]}
        onChange={handleChange} />
    </div>
    </>

    return (
        <div className={styles.formWrapper}>
            <form className={styles.form} onSubmit={handleSubmit}>
                {formFields.map((field, index) => <Fragment key={index}>{renderInput(field)}</Fragment>)}
                <div className={styles.actions}>
                    <CtaButton text="Submit" onClick={handleSubmit} style="primary" />
                </div>
            </form>
        </div>
    )
}

export default Form