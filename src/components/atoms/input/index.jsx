import styles from './index.module.scss';

const Input = ({ label, type, value, onChange, ...props }) => {

    const handleChange = (value) => {
        onChange(label, value)
    }

    const renderTextInput = () => <>
        <label htmlFor="name">{label}:</label>
        <input
            type="text"
            id="name"
            name="name"
            value={value}
            onChange={handleChange}
        />
        {/* <span className="error">{errors.name}</span> */}
    </>

    const renderEmailInput = () => <>
        <label>{label}:</label>
        <input
            type="email"
            name="email"
            value={value}
            onChange={handleChange}
        />
        {/* <span className="error">{errors.email}</span> */}
    </>

    const renderPasswordInput = () => <>
        <label htmlFor="password">{label}:</label>
        <input
            type="password"
            id="password"
            name="password"
            value={value}
            onChange={handleChange}
        />
        {/* <span className="error">{errors.password}</span> */}
    </>

    const renderInput = () => {
        switch (type) {
            case "email": return renderEmailInput(); break;
            case "password": return renderPasswordInput(); break;
            default: return renderTextInput();
        }
    }

    return <div className={styles.inputWraper}>{renderInput()}</div>
}

export default Input