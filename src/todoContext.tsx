import {createContext} from 'react';
import {Task, TodoContextType} from '../types';

export const TodoContext = createContext<TodoContextType | null>(null);
