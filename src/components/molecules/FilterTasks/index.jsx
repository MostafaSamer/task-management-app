import Input from "components/atoms/input"
import styles from "./index.module.scss"
import { useDispatch, useSelector } from "react-redux";
import Users from "redux/users";
import Tasks from "redux/tasks";

const FilterTasks = () => {

    const dispatch = useDispatch();
    const user = useSelector(Users.selectors.getCurrentUser);

    const filterObj = { userId: user?.id || "" };

    const handleFilterTasks = (accessor, value) => {
        let updateFilters = {
            ...filterObj,
            completed: value == 2
        }
        dispatch(Tasks.thunks.getAllTasks(value == 0 ? filterObj : updateFilters));
    }

    return <div className={styles.filterWrapper}>
        <div className={styles.filter}>
            <div className={styles.filterInput}>
                <Input
                    accessor={"completed"}
                    // label={"Filter by Status"}
                    onChange={handleFilterTasks}
                    inline={true}
                    type={"dropdown"}
                    options={[
                        { label: "All", value: 0 },
                        { label: "Active", value: 1 },
                        { label: "Completed", value: 2 },
                    ]}
                />
            </div>
        </div>
    </div>
}

export default FilterTasks