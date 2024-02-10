import React, {useState} from 'react';
import {PaperProvider} from 'react-native-paper';
import AppNavigator from './src/navigation/AppNavigator';
import {TodoContext} from './src/todoContext';
import {Task} from './types';

function App(): React.JSX.Element {
  const [tasks, setTasks] = useState<Task[]>([
    {pending: true, description: 'Edcec'},
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
    <PaperProvider>
      <TodoContext.Provider
        value={{
          tasks,
          addTodo,
          updateTodoDetails,
          updateTodoStatus,
          deleteTodo,
        }}>
        <AppNavigator />
      </TodoContext.Provider>
    </PaperProvider>
  );
}

export default App;
