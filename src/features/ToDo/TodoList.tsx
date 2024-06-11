import TodoItem from "../../components/TodoItem.tsx";
import {useAppDispatch} from "../../redux-hooks.ts";
import {Todo} from "../../types";
import {changeStatusTodo, deleteTodo} from "./todoSlice.ts";
import {useSelector} from "react-redux";
import {selectAllTodos} from "./todoSelectors.ts";

const TodoList = () => {

    // это использование селектора если для него нет отдельной типизации:
    //const list = useAppSelector(state => state.todos);
    // здесь типизация для state.todos задана отдельной функцией:
    const list = useSelector(selectAllTodos);
    const dispatch = useAppDispatch();

    const handleRemoveTodo = (id: Todo['id']) => {
        dispatch(deleteTodo(id))
    }

    const handleChangeStatusTodo = (id: Todo['id']) => {
        dispatch(changeStatusTodo(id))
    }

    return (
        <ul>
            {
                list.map((todo) => {
                    return <TodoItem
                        key={todo.id}
                        handlerRemove={handleRemoveTodo}
                        handlerCheckBox={handleChangeStatusTodo}
                        {...todo}
                    />
                })
            }
        </ul>
    );
};

export default TodoList;