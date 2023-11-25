import { useDispatch, useSelector } from "react-redux"
import styles from "./index.module.scss"
import User from "redux/users"
import CtaButton from "components/atoms/CtaButton";
import Users from "redux/users";

const Header = () => {

    const dispatch = useDispatch();
    const user = useSelector(Users.selectors.getCurrentUser)

    const handleLogOut = () => dispatch(User.slice.actions.logout())

    return (
        <header className={styles.header}>
            <div className={styles.headerLeft}>
                <h1>Task Management System</h1>
            </div>
            <div className={styles.headerRight}>
                <p>{user?.name}</p>
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