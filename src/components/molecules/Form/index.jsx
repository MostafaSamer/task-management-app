import Input from "components/atoms/input"
import styles from "./index.module.scss"
import { Fragment, useState } from "react"
import CtaButton from "components/atoms/CtaButton"
import { useHistory } from 'react-router-dom';

const Form = ({ actionsText, link, fields, onSubmit }) => {

    const history = useHistory();
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

    const redirect = (path) => { history.push(path) }

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
                {fields.map((field, index) => <Fragment key={index}>{renderInput(field)}</Fragment>)}
                <div className={styles.link}>
                    <span onClick={() => {redirect(link.ref)}}>
                        {link.text}
                    </span>
                </div>
                <div className={styles.actions}>
                    <CtaButton text={actionsText} onClick={handleSubmit} style="primary" />
                </div>
            </form>
        </div>
    )
}

export default Form