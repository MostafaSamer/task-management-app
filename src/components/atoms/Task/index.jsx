import { useDispatch } from "react-redux";
import CtaButton from "../CtaButton";
import styles from "./index.module.scss";
import Tasks from "redux/tasks";

const Task = ({task}) => {

    const dispatch = useDispatch()

    const handleDeleteTask = () => {
        dispatch(Tasks.thunks.deleteTask(task.id))
    }

    return (
        <div className={styles.TaskWrapper}>
            <p>{task.title}</p>
            <CtaButton
            text={"Delete"}
            onClick={handleDeleteTask}
            style={"danger"}
            />
        </div>
    )
}

export default Task