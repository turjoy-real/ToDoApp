import {configureStore} from '@reduxjs/toolkit';
import todo from './reducers/todo';
const store = configureStore({
  reducer: {
    todo,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
