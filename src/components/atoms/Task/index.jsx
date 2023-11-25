import { useDispatch } from "react-redux";
import CtaButton from "../CtaButton";
import styles from "./index.module.scss";
import Tasks from "redux/tasks";
import Input from "../input";
import { useState } from "react";

const Task = ({ task }) => {

    const dispatch = useDispatch()
    const [editMode, setEditMode] = useState(false);
    const [editTitle, setEditTitle] = useState(task.title);

    const handleMarkTask = () => {
        dispatch(Tasks.thunks.markTask({
            id: task.id,
            task: {
                ...task,
                completed: !task.completed
            }
        }))
    }

    const handleEditMode = () => {
        if (!editMode) setEditMode(true);
        else {
            if(editTitle === "") return;
            dispatch(Tasks.thunks.updateTask({
                id: task.id,
                task: {
                    ...task,
                    title: editTitle
                }
            }));
            setEditMode(false);
        }
    }

    const handleDeleteTask = () => {
        if (!editMode) dispatch(Tasks.thunks.deleteTask(task.id))
        else setEditMode(false)
    }

    const renderTask = () => editMode ?
        <Input
            accessor={"editTask"}
            onChange={(accessor, e) => { console.log("New Task: ", e.target.value); setEditTitle(e.target.value) }}
            value={editTitle}
        /> :
        <p className={task.completed ? `${styles.completed}` : ""}>{task.title}</p>


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
                {renderTask()}
            </div>
            <div className={styles.actions}>
                <CtaButton
                    text={editMode ? "Save" : "Edit"}
                    onClick={handleEditMode}
                    style={editMode ? "success" : "primary"}
                />
                <CtaButton
                    text={editMode ? "Discard" : "Delete"}
                    onClick={handleDeleteTask}
                    style={"danger"}
                />
            </div>
        </div>
    )
}

export default Task