import {RootState} from "../../store.ts";

export const selectAllAsyncTodos = (state: RootState) => state.asyncTodos;