import AddNewItem from "../../components/NewItem.tsx";
import {useAppDispatch} from "../../redux-hooks.ts";
import {createTodo} from "./todoAsyncActions.ts";

const NewAsyncTodo = () => {
    const dispatch = useAppDispatch();

    const handleNewTodo = (title: string) => {
        dispatch(createTodo(title));
    }

    return (
        <AddNewItem
            handleClick={handleNewTodo}
            placeholder='add new todo...'
        />
    )
}

export default NewAsyncTodo;