import Input from "components/atoms/input"
import styles from "./index.module.scss"
import { Fragment, useState } from "react"

const Form = ({ formFields, onSubmit }) => {

    const [formData, setFormData] = useState({})

    const handleSubmit = () => {
        console.log("Call onSubmit()...")
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
            </form>
        </div>
    )
}

export default Form