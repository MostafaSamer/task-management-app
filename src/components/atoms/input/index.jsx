import styles from './index.module.scss';

const Input = ({ accessor, label, type, value, onChange, customStyle, ...props }) => {

    const handleChange = (value) => {
        onChange(accessor, value)
    }

    const renderTextInput = () => <>
        {label && <label>{label}:</label>}
        <input
            type="text"
            name={accessor}
            value={value}
            style={customStyle}
            onChange={handleChange}
        />
        {/* <span className="error">{errors.name}</span> */}
    </>

    const renderEmailInput = () => <>
        {label && <label>{label}:</label>}
        <input
            type="email"
            name={accessor}
            value={value}
            style={customStyle}
            onChange={handleChange}
        />
        {/* <span className="error">{errors.email}</span> */}
    </>

    const renderPasswordInput = () => <>
        {label && <label>{label}:</label>}
        <input
            type="password"
            name={accessor}
            value={value}
            style={customStyle}
            onChange={handleChange}
        />
        {/* <span className="error">{errors.password}</span> */}
    </>

    const renderCheckInput = () => <>
        {label && <label>{label}:</label>}
        <input
            type="checkbox"
            name={accessor}
            checked={value}
            style={customStyle}
            onChange={handleChange}
        />
        {/* <span className="error">{errors.password}</span> */}
    </>

    const renderInput = () => {
        switch (type) {
            case "email": return renderEmailInput(); break;
            case "password": return renderPasswordInput(); break;
            case "checkbox": return renderCheckInput(); break;
            default: return renderTextInput();
        }
    }

    return <div className={styles.inputWraper}>{renderInput()}</div>
}

export default Input