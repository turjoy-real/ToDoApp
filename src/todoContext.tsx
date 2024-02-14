import {ReactNode, createContext, useState} from 'react';
import {Task, TodoContextType} from '../types';

export const TodoContext = createContext<TodoContextType | null>(null);

const TodoProvider = ({children}: {children: ReactNode}) => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      pending: true,
      description: 'Edcec vjhvjh efvfdvfvd everfver cervcerver',
    },
  ]);

  // functions

  const addTodo = (todo: string) => {
    let task = {
      pending: true,
      description: todo,
    };
    setTasks([...tasks, task]);
  };

  const updateTodoStatus = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].pending = !updatedTasks[index].pending;
    setTasks(updatedTasks);
  };

  const updateTodoDetails = (index: number, description: string) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].description = description;
    setTasks(updatedTasks);
  };

  const deleteTodo = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <TodoContext.Provider
      value={{
        tasks,
        addTodo,
        updateTodoDetails,
        updateTodoStatus,
        deleteTodo,
      }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
