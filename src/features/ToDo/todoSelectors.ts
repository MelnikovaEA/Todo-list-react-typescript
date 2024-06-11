import {RootState} from "../../store.ts";

export const selectAllTodos = (state: RootState) => state.todos;