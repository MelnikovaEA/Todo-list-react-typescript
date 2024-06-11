import {createAsyncThunk} from "@reduxjs/toolkit";
import {Todo} from "../../types";
import {TodoSlice} from "./asyncTodoSlice.ts";

// здесь асинксанк типизирована как дженерик
export const fetchAllTodos = createAsyncThunk<
    Todo[],
    undefined,
    { state: { asyncTodos: TodoSlice } }
>(
    'asyncTodos/fetchTodos',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');

        return await response.json();
    },
    // это - условие при котором асинксанк не должна выполняться
    {
        condition: (_, {getState}) => {
            const {status} = getState().asyncTodos;

            if (status === 'loading') {
                return false;
            }
        }
    }
);

// здесь типизация прямо внутри а не как дженерик
export const createTodo = createAsyncThunk(
    'asyncTodos/createTodo',
    async (text: string) => {
        const newTodo: Required<Omit<Todo, 'id'>> = {
            title: text,
            completed: false,
            userId: 1,
        }

        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTodo),
        })

        return (await response.json()) as Todo;
    }
);

export const removeTodo = createAsyncThunk<
    Todo['id'],
    Todo['id'],
    { rejectValue: string }
>(
    'asyncTodos/removeTodo',
    async (id, {rejectWithValue}) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/' + id, {
            method: 'DELETE',
        });

        if (!response.ok) {
            rejectWithValue('Id' + id + 'not found')
        }

        return id;
    }
);

export const toggleTodo = createAsyncThunk<
    Todo,
    Todo['id'],
    { state: { asyncTodos: TodoSlice }, rejectValue: string }
>(
    'asyncTodos/toggleTodo',
    async (id, {getState, rejectWithValue}) => {
        const todo = getState().asyncTodos.list.find(el => el.id === id);

        if (todo) {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/' + id, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    completed: !todo.completed
                }),
            });

            if (!response.ok) {
                rejectWithValue('Impossible update todo with id' + id)
            }

            return await response.json();
        }

        return rejectWithValue('No such todo');
    }
)

