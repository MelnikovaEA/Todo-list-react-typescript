import {createSlice} from "@reduxjs/toolkit";

import {Todo} from "../../types";
import {createTodo, fetchAllTodos, removeTodo, toggleTodo} from "./todoAsyncActions.ts";

 export type TodoSlice = {
    status: 'idle' | 'loading' | 'fulfilled' | 'error'
    list: Todo[]
}

const initialState: TodoSlice = {
    status: 'idle',
    list: []
};

const asyncTodoSlice = createSlice({
    name: 'asyncTodos',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchAllTodos.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllTodos.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.list = action.payload;
            })
            .addCase(fetchAllTodos.rejected, (state) => {
                state.status = 'error';
            })
            .addCase(createTodo.fulfilled, (state, action)=> {
                state.list.push(action.payload);
            })
            .addCase(removeTodo.fulfilled, (state, action) => {
                state.list = state.list.filter(el=>el.id !== action.payload);
            })
            .addCase(toggleTodo.fulfilled, (state, action) => {
               const todo = state.list.find(el => el.id === action.payload.id);

               if(todo){
                   todo.completed = action.payload.completed;
               }
            })
    }
});

export default asyncTodoSlice.reducer;

