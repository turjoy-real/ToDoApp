import {useAppSelector} from '../hooks/redux-hooks';

const useTodoData = () => {
  const todos = useAppSelector(state => state.todo.data);
  return todos;
};

export default useTodoData;
