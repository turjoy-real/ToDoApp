import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ViewTodo from '../screens/ViewTodo/ViewTodoScreen';
import TodoList from '../screens/TodoList/TodoListScreen';
import {RootStackParamList} from '../../types';
import AddTodo from '../screens/AddEditTodo/AddEditTodoScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="List" component={TodoList} />
        <Stack.Screen name="Details" component={ViewTodo} />
        <Stack.Screen name="AddEdit" component={AddTodo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
