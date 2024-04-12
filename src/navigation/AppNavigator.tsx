import {NavigationContainer} from '@react-navigation/native';
import ViewTodo from '../screens/ViewTodo/ViewTodoScreen';
import TodoList from '../screens/TodoList/TodoListScreen';
import {RootStackParamList} from '../../types';
import AddTodo from '../screens/AddEditTodo/AddEditTodoScreen';

import {createStackNavigator} from '@react-navigation/stack';

const {Screen, Navigator} = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="List" component={TodoList} />
        <Screen name="Details" component={ViewTodo} />
        <Screen name="AddEdit" component={AddTodo} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
