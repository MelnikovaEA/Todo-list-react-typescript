import './App.css'
import NewTodo from "./features/ToDo/NewTodo.tsx";

import TodoList from "./features/ToDo/TodoList.tsx";
import NewAsyncTodo from "./features/AsyncTodo/NewAsyncTodo.tsx";
import AsyncTodoList from "./features/AsyncTodo/AsyncTodoList.tsx";

function App() {

    return (
        <div className='App'>
            <h2>Todo list </h2>
            <NewTodo/>
            <TodoList/>
            <hr/>
            <h1>Async Todo list </h1>
            <NewAsyncTodo/>
            <AsyncTodoList/>
        </div>
    )
}

export default App


