import AddTask from "components/molecules/AddTask"
import Footer from "components/molecules/Footer"
import Header from "components/molecules/Header"
import ListTasks from "components/molecules/ListTasks"

import styles from "./index.module.scss"
import FilterTasks from "components/molecules/FilterTasks"

const Home = () => {
    return (
        <div className={styles.homeWrapper}>
            <Header />
            <AddTask />
            <FilterTasks />
            <ListTasks />
            <Footer />
        </div>
    )
}

export default Home