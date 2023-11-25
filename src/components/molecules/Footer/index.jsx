import styles from "./index.module.scss"

const Footer = () => {
    return <div className={styles.footerWrapper}>
        <div className={styles.footer}>
            <p>Created by <a href="https://github.com/MostafaSamer" target="_blank">Mostafa Samir</a> with &#x2764;&#xfe0f;</p>
        </div>
    </div>
}

export default Footer