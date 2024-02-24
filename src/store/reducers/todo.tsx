import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Task} from '../../../types';

interface todoSliceState {
  data: Task[];
}

// Define the initial state using that type
const initialState: todoSliceState = {
  data: [],
};

interface updateProps {
  index: number;
  description: string;
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.data = [
        ...state.data,
        {pending: true, description: action.payload},
      ];
    },
    updateTodoDetails: (state, action: PayloadAction<updateProps>) => {
      const updatedTasks = [...state.data];
      updatedTasks[action.payload.index].description =
        action.payload.description;
      state.data = updatedTasks;
    },
    updateTodoStatus: (state, action: PayloadAction<number>) => {
      const updatedTasks = [...state.data];
      updatedTasks[action.payload].pending =
        !updatedTasks[action.payload].pending;
      state.data = updatedTasks;
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      const updatedTasks = [...state.data];
      updatedTasks.splice(action.payload, 1);
      state.data = updatedTasks;
    },
  },
});

// Other code such as selectors can use the imported `RootState` type

export default todoSlice.reducer;
