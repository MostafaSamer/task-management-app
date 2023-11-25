import Input from "components/atoms/input"
import styles from "./index.module.scss"
import { Fragment, useEffect, useState } from "react"
import CtaButton from "components/atoms/CtaButton"
import { useHistory } from 'react-router-dom';

const Form = ({ actionsText, link, fields, onSubmit }) => {

    const history = useHistory();
    const [formData, setFormData] = useState({})
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        let canSubmit = handleValidation();
        if(canSubmit) onSubmit(formData);
    }

    const handleValidation = () => {
        let err = {};
        fields.forEach(f => {
            if(f.validation) {
                let valid = f.validation.check(formData[f.accessor] || "");
                if (!valid) err = {
                    ...err,
                    [f.accessor]: f.validation.message
                }
            }
        });
        setErrors(err);
        return Object.keys(err).length === 0
    }

    const handleChange = (accessor, e) => {
        let value = e.target.value
        setFormData((prevData) => {
            return {
                ...prevData,
                [accessor]: value
            }
        })
    }

    const redirect = (path) => { history.push(path) }

    const renderInput = (field) => <>
        <div className={styles.inputWrapper}>
            <Input
                accessor={field.accessor}
                label={field.label}
                type={field.type}
                value={formData[field.label]}
                errors={errors[field.accessor]}
                onChange={handleChange} />
        </div>
    </>

    return (
        <div className={styles.formWrapper}>
            <form className={styles.form} onSubmit={handleSubmit}>
                {fields.map((field, index) => <Fragment key={index}>{renderInput(field)}</Fragment>)}
                <div className={styles.link}>
                    <span onClick={() => { redirect(link.ref) }}>
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