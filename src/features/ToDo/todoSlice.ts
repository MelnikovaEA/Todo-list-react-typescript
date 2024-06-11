import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {Todo} from "../../types";

const initialState: Todo[] = [];

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const newTodo: Todo = {
                id: new Date().getTime().toString(),
                title: action.payload,
                completed: false
            }

            return [newTodo, ...state]
        },
        deleteTodo: (state, action: PayloadAction<Todo['id']>) => {
            return state.filter(todo => todo.id !== action.payload);
        },
        changeStatusTodo: (state, action: PayloadAction<Todo['id']>) => {
            const todo = state.find(el => el.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        }
    }
});

export default todoSlice.reducer;

export const {
    addTodo,
    deleteTodo,
    changeStatusTodo
} = todoSlice.actions;