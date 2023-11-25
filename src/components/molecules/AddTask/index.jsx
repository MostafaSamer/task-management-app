import Input from "components/atoms/input";
import styles from "./index.module.scss";
import { useState } from "react";
import CtaButton from "components/atoms/CtaButton";
import { useDispatch, useSelector } from "react-redux";
import Tasks from "redux/tasks";
import Users from "redux/users";

const AddTask = () => {

    const dispatch = useDispatch();
    const user = useSelector(Users.selectors.getCurrentUser)
    const [value, setValue] = useState("");

    const addTask = (e) => {
        e.preventDefault();
        if(value === "") return;
        dispatch(Tasks.thunks.createTask({
            title: value,
            userId: user.id
        }))
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