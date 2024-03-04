import {createSlice} from '@reduxjs/toolkit';
import {TaskResp} from '../../../types';
import {
  addTodo,
  deleteTodo,
  fetchTodos,
  updateTodoDetails,
  updateTodoStatus,
} from '../actions/todo';

interface todoSliceState {
  status: 'idle' | 'pending' | 'success' | 'failed';
  data: TaskResp[];
  error: string | undefined;
}

// Define the initial state using that type
const initialState: todoSliceState = {
  status: 'idle',
  data: [],
  error: undefined,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder

      // Fetching
      .addCase(fetchTodos.pending, state => {
        state.status = 'pending';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload ? action.payload : [];
      })
      .addCase(fetchTodos.rejected, (state: todoSliceState, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Adding
      .addCase(addTodo.pending, state => {
        state.status = 'pending';
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.status = 'success';
        action.payload ? state.data.push(action.payload) : null;
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Update status
      .addCase(updateTodoStatus.pending, state => {
        state.status = 'pending';
      })
      .addCase(updateTodoStatus.fulfilled, (state, action) => {
        state.status = 'success';
        const updatedTasks = [...state.data];
        console.log(action.payload);

        const index = updatedTasks.findIndex(
          item => item.id === action.payload,
        );

        updatedTasks[index].pending = !updatedTasks[index].pending;
        state.data = updatedTasks;
      })
      .addCase(updateTodoStatus.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Update details
      .addCase(updateTodoDetails.pending, (state, action) => {
        state.status = 'pending';
      })
      .addCase(updateTodoDetails.fulfilled, (state, action) => {
        state.status = 'success';
        const updatedTasks = [...state.data];
        const index = updatedTasks.findIndex(
          item => item.id === action.payload?.id,
        );

        action.payload?.description
          ? (updatedTasks[index].description = action.payload.description)
          : null;
        state.data = updatedTasks;
      })
      .addCase(updateTodoDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Delete
      .addCase(deleteTodo.pending, state => {
        state.status = 'pending';
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = state.data.filter(item => item.id !== action.payload);
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default todoSlice.reducer;
