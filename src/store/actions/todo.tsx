import {createAsyncThunk} from '@reduxjs/toolkit';
import {Task, TaskResp} from '../../../types';
import BaseURL from '../../constants/baseUrl';

export const fetchTodos = createAsyncThunk('todo/fetch', async () => {
  try {
    const response = await fetch(`${BaseURL}/todos.json`);

    if (!response.ok) {
      return Promise.reject(`HTTP error! Status: ${response.status}`);
    }
    const resData = await response.json();
    const arr: TaskResp[] = [];

    for (const key in resData) {
      arr.push({
        id: key,
        description: resData[key].description,
        pending: resData[key].pending,
      });
    }

    return Promise.resolve(arr);
  } catch (error) {
    return Promise.reject(error);
  }
});

export const addTodo = createAsyncThunk('todo/add', async (task: string) => {
  let todo: Task = {
    description: task,
    pending: true,
  };

  try {
    const response = await fetch(`${BaseURL}/todos.json`, {
      method: 'POST',
      body: JSON.stringify({...todo}),
    });
    if (!response.ok) {
      return Promise.reject(`HTTP error! Status: ${response.status}`);
    }
    const resData = await response.json();

    return Promise.resolve({
      ...todo,
      id: `${resData.name}`,
    });
  } catch (error) {
    return Promise.reject(error);
  }
});

interface updateDetailsParams {
  id: string;
  description: string;
}

export const updateTodoDetails = createAsyncThunk(
  'todo/updateDetails',
  async ({id, description}: updateDetailsParams) => {
    try {
      const response = await fetch(`${BaseURL}/todos/${id}.json`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({description}),
      });

      if (!response.ok) {
        return Promise.reject(`HTTP error! Status: ${response.status}`);
      }

      await response.json();

      return Promise.resolve({
        description,
        id,
      });
    } catch (e) {
      return Promise.reject(e);
    }
  },
);

interface updateStatusParams {
  id: string;
  pending: boolean;
}

export const updateTodoStatus = createAsyncThunk(
  'todo/updateStatus',
  async ({id, pending}: updateStatusParams) => {
    try {
      const response = await fetch(`${BaseURL}/todos/${id}.json`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({pending: !pending}),
      });

      if (!response.ok) {
        return Promise.reject(`HTTP error! Status: ${response.status}`);
      }

      await response.json();

      return Promise.resolve(id);
    } catch (e) {
      return Promise.reject(e);
    }
  },
);

export const deleteTodo = createAsyncThunk(
  'todo/delete',
  async (id: string) => {
    try {
      const response = await fetch(`${BaseURL}/todos/${id}.json`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        return Promise.reject(`HTTP error! Status: ${response.status}`);
      }

      await response.json();

      return Promise.resolve(id);
    } catch (error) {
      return Promise.reject(error);
    }
  },
);
