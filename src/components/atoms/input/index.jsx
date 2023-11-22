import styles from './index.module.scss';

const Input = ({ label, type, value, onChange, ...props }) => {

    const handleChange = (value) => {
        onChange(label, value)
    }

    const renderTextInput = () => <>
        <div>
            <label htmlFor="name">{label}:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={value}
                onChange={handleChange}
            />
            {/* <span className="error">{errors.name}</span> */}
        </div>
    </>

    const renderEmailInput = () => <>
        <div>
            <label>{label}:</label>
            <input
                type="email"
                name="email"
                value={value}
                onChange={handleChange}
            />
            {/* <span className="error">{errors.email}</span> */}
        </div>
    </>

    const renderPasswordInput = () => <>
        <div>
            <label htmlFor="password">{label}:</label>
            <input
                type="password"
                id="password"
                name="password"
                value={value}
                onChange={handleChange}
            />
            {/* <span className="error">{errors.password}</span> */}
        </div>
    </>

    switch (type) {
        case "email": return renderEmailInput(); break;
        case "password": return renderPasswordInput(); break;
        default: return renderTextInput();
    }
}

export default Input