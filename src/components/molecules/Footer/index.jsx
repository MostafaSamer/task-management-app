import styles from "./index.module.scss"

const Footer = () => {
    return <div className={styles.footerWrapper}>
        <div className={styles.footer}>
            <p>Created by <a href="https://github.com/MostafaSamer" target="_blank">Mostafa Samir</a> with &#x1F499;</p>
        </div>
    </div>
}

export default Footer