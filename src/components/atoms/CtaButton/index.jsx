import styles from './index.module.scss';

const CtaButton = ({ text, onClick, style }) => {
    return (
        <div className={styles.buttonWraper}>
            <button onClick={onClick} className={`${styles[style]} ${styles.button}`}>
                {text}
            </button>
        </div>
    )
}

export default CtaButton