import { useDispatch } from "react-redux"
import styles from "./index.module.scss"
import User from "redux/users"
import CtaButton from "components/atoms/CtaButton";

const Header = () => {

    const dispatch = useDispatch();

    const handleLogOut = () => dispatch(User.slice.actions.logout())

    return (
        <header className={styles.header}>
            <div className={styles.headerLeft}>
                <h1>Task Management System</h1>
            </div>
            <div className={styles.headerRight}>
                <CtaButton
                    onClick={handleLogOut}
                    style={"danger"}
                    text={"Logout"}
                />
            </div>
        </header>
    );

}

export default Header