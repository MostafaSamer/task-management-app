import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.scss"

import Tasks from "redux/tasks";
import { useEffect } from "react";
import Task from "components/atoms/Task";

const ListTasks = () => {

    const dispatch = useDispatch();
    const tasks = useSelector(Tasks.selectors.getTasks);

    useEffect(() => {
        dispatch(Tasks.thunks.getAllTasks());
    }, [dispatch]);

    const renderTasks = () => {
        return tasks ? tasks.map((task) => (
            <div key={task.id} className={styles.taskItem}>
                <Task task={task} />
            </div>
        )) : "";
    };
    

    return (
        <div className={styles.listTasksWrapper}>
            <div className={styles.listTasks}>{renderTasks()}</div>
        </div>
    )
};

export default ListTasks;