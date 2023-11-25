import Input from "components/atoms/input"
import styles from "./index.module.scss"
import { useDispatch, useSelector } from "react-redux";
import Users from "redux/users";
import Tasks from "redux/tasks";

const FilterTasks = () => {

    const dispatch = useDispatch();
    const user = useSelector(Users.selectors.getCurrentUser);

    const filterObj = { userId: user.id };

    const handleFilterTasks = (accessor, value) => {
        let updateFilters = {
            ...filterObj,
            completed: value == 2
        }
        dispatch(Tasks.thunks.getAllTasks(value == 0 ? filterObj : updateFilters));
    }

    return <Input
    accessor={"completed"}
    label={"Filter by Status"}
    onChange={handleFilterTasks}
    type={"dropdown"}
    options={[
        { label: "All", value: 0 },
        { label: "Active", value: 1 },
        { label: "Completed", value: 2 },
    ]}
    />
}

export default FilterTasks