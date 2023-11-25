import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.scss"

import Tasks from "redux/tasks";
import { useEffect } from "react";
import Task from "components/atoms/Task";
import Users from "redux/users";
import EmptyList from "components/atoms/EmptyList";

const ListTasks = () => {

    const dispatch = useDispatch();
    const tasks = useSelector(Tasks.selectors.getTasks);
    const user = useSelector(Users.selectors.getCurrentUser)

    useEffect(() => {
        dispatch(Tasks.thunks.getAllTasks({ userId: user.id }));
    }, []);

    const renderTasks = () => {
        return tasks.length ? tasks.map((task) => (
            <div key={task.id} className={styles.taskItem}>
                <Task task={task} />
            </div>
        )) : <EmptyList />
    };


    return (
        <div className={styles.listTasksWrapper}>
            <div className={styles.listTasks}>{tasks != undefined && renderTasks()}</div>
        </div>
    )
};

export default ListTasks;