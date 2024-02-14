import React from 'react';
import {PaperProvider} from 'react-native-paper';
import AppNavigator from './src/navigation/AppNavigator';
import TodoProvider from './src/todoContext';

function App(): React.JSX.Element {
  return (
    <PaperProvider>
      <TodoProvider>
        <AppNavigator />
      </TodoProvider>
    </PaperProvider>
  );
}

export default App;
