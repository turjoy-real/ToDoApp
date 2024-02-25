import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {GestureResponderEvent} from 'react-native';

export type PressProps = {
  onPress: (event: GestureResponderEvent) => void;
};

export type CustomIconButtonProps = {
  onPress: (event: GestureResponderEvent) => void;
  icon: string;
};

export interface Task {
  pending: boolean;
  description: string;
}

export type RootStackParamList = {
  List: undefined;
  Details: {task: Task; index: number};
  AddEdit: undefined | {task: Task; index: number};
};

// Navigation Type for TodoList screen

export type ListScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'List'
>;

// Navigation Type for AddEdit screen

export type AddEditScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'AddEdit'
>;

// Routing Type for ViewTodo screen

export type ViewScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

// Routing Type for AddEdit screen

export type AddEditScreenRouteProp = RouteProp<RootStackParamList, 'AddEdit'>;

export interface Error {
  error: boolean;
  errorMessage: string;
}
