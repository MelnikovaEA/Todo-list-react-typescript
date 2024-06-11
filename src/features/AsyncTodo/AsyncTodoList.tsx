import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../redux-hooks.ts";
import {Todo} from "../../types";
import {selectAllAsyncTodos} from "./asyncTodoSelectors.ts";
import {fetchAllTodos, removeTodo, toggleTodo} from "./todoAsyncActions.ts";
import TodoItem from "../../components/TodoItem.tsx";

const TodoList = () => {

    // это использование селектора если для него нет отдельной типизации:
    //const list = useAppSelector(state => state.todos);
    // здесь типизация для state.todos задана отдельной функцией:
    const {list} = useSelector(selectAllAsyncTodos);
    const dispatch = useAppDispatch();

    const handleRemoveTodo = (id: Todo['id']) => {
        dispatch(removeTodo(id));
    }

    const handleChangeStatusTodo = (id: Todo['id']) => {
        dispatch(toggleTodo(id))
    }

    useEffect(() => {
        dispatch(fetchAllTodos())
    }, []);

    return (
        <ul>
            {
                list.map((todo) => {
                    return <TodoItem
                        key={todo.title}
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