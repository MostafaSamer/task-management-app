import { useDispatch } from "react-redux";
import CtaButton from "../CtaButton";
import styles from "./index.module.scss";
import Tasks from "redux/tasks";
import Input from "../input";

const Task = ({task}) => {

    const dispatch = useDispatch()

    const handleMarkTask = () => {
        dispatch(Tasks.thunks.markTask({
            id: task.id,
            task: {
                ...task,
                completed: !task.completed
            }
        }))
    }

    const handleDeleteTask = () => dispatch(Tasks.thunks.deleteTask(task.id))

    return (
        <div className={styles.taskWrapper}>
            <div className={styles.task}>
                <Input
                accessor={"mark"}
                onChange={handleMarkTask}
                value={task.completed}
                type={"checkbox"}
                customStyle={{
                    width: '20px',
                    height: '20px',
                    marginRight: '8px',
                    cursor: 'pointer'
                  }}
                />
                <p className={task.completed? `${styles.completed}` : ""}>{task.title}</p>
            </div>
            <CtaButton
            text={"Delete"}
            onClick={handleDeleteTask}
            style={"danger"}
            />
        </div>
    )
}

export default Task