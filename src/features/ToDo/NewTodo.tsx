import AddNewItem from "../../components/NewItem.tsx";
import {useAppDispatch} from "../../redux-hooks.ts";
import {addTodo} from "./todoSlice.ts";

const NewTodo = () => {
    const dispatch = useAppDispatch();

    const handleNewTodo = (title: string) => {
        dispatch(addTodo(title));
    }

    return (
        <AddNewItem
            handleClick={handleNewTodo}
            placeholder='add new todo...'
        />
    )
}

export default NewTodo;