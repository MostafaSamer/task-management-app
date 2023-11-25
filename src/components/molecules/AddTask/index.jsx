import Input from "components/atoms/input";
import styles from "./index.module.scss";
import { useState } from "react";
import CtaButton from "components/atoms/CtaButton";
import { useDispatch } from "react-redux";
import Tasks from "redux/tasks";

const AddTask = () => {

    const dispatch = useDispatch();
    const [value, setValue] = useState("");

    const addTask = (e) => {
        e.preventDefault();
        if(value === "") return;
        dispatch(Tasks.thunks.createTask(value))
        setValue("");
    }

    const handleChange = (accessor, e) => {
        setValue(e.target.value);
    }

    return (
        <div className={styles.addTaskWrapper}>
            <div className={styles.addTask}>
                <form>
                    <Input
                        accessor={"task"}
                        onChange={handleChange}
                        customStyle={{
                            height: "27px",
                            width: "300px"
                        }}
                        value={value} />
                    <CtaButton
                        text={"Add Task"}
                        onClick={addTask}
                        style={"primary"}
                    />
                </form>
            </div>
        </div>
    )
}

export default AddTask