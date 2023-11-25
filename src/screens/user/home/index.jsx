import AddTask from "components/molecules/AddTask"
import Footer from "components/molecules/Footer"
import Header from "components/molecules/Header"
import ListTasks from "components/molecules/ListTasks"

import styles from "./index.module.scss"

const Home = () => {
    return (
        <div className={styles.homeWrapper}>
            <Header />
            <AddTask />
            <ListTasks />
            <Footer />
        </div>
    )
}

export default Home