import styles from './index.module.scss';

const Input = ({ accessor, label, type, value, onChange, customStyle, inline, options, errors, ...props }) => {

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
    </>

    const renderDropdownInput = () => (
        <>
            {label && <label>{label}:</label>}
            <select
                name={accessor}
                value={value}
                style={customStyle}
                onChange={(e) => handleChange(e.target.value)}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </>
    );

    const renderInput = () => {
        switch (type) {
            case "email": return renderEmailInput(); break;
            case "password": return renderPasswordInput(); break;
            case "checkbox": return renderCheckInput(); break;
            case "dropdown": return renderDropdownInput(); break;
            default: return renderTextInput();
        }
    }

    return <div className={styles.inputWraper}>
        {renderInput()}
        {errors && <span className={styles.error}>{errors}</span>}
    </div>
}

export default Input