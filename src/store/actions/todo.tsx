import {todoSlice} from '../reducers/todo';

export const {addTodo, updateTodoStatus, updateTodoDetails, deleteTodo} =
  todoSlice.actions;
