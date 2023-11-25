import styles from "./index.module.scss";

const Alert = ({ message, type }) => <div className={styles.alertWrapper}>
    <p className={`${styles[type]} ${styles.alert}`}>{message}</p>
</div>

export default Alert;