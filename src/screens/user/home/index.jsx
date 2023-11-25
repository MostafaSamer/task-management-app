import AddTask from "components/molecules/AddTask"
import Header from "components/molecules/Header"
import ListTasks from "components/molecules/ListTasks"

const Home = () => {
    return (
        <div>
            <Header />
            <AddTask />
            <ListTasks />
        </div>
    )
}

export default Home