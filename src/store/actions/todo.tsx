import {createAsyncThunk} from '@reduxjs/toolkit';
import {Task, TaskResp} from '../../../types';
import BaseURL from '../../constants/baseUrl';

type ResolveType<T> = (value?: T | PromiseLike<T>) => void;
type RejectType = (reason?: string) => void;

export const fetchTodos = createAsyncThunk('todo/fetch', async () => {
  return new Promise((resolve: ResolveType<TaskResp[]>, reject: RejectType) => {
    fetch(`${BaseURL}/todos.json`)
      .then(response => {
        if (!response.ok) {
          reject(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        let resData: any = data;
        let arr: TaskResp[] = [];
        for (let key in resData) {
          arr.push({
            id: key,
            description: resData[key].description,
            pending: resData[key].pending,
          });
        }
        resolve(arr);
      })
      .catch(error => {
        reject(error);
      });
  });
});

export const addTodo = createAsyncThunk('todo/add', async (task: string) => {
  let todo: Task = {
    description: task,
    pending: true,
  };

  return new Promise((resolve: ResolveType<TaskResp>, reject: RejectType) => {
    fetch(`${BaseURL}/todos.json`)
      .then(response => {
        if (!response.ok) {
          reject(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        let resData: any = data;
        resolve({
          ...todo,
          id: `${resData.name}`,
        });
      })
      .catch(error => {
        reject(error);
      });
  });
});

interface updateDetailsParams {
  id: string;
  description: string;
}

export const updateTodoDetails = createAsyncThunk(
  'todo/updateDetails',
  async ({id, description}: updateDetailsParams) => {
    return new Promise(
      (resolve: ResolveType<updateDetailsParams>, reject: RejectType) => {
        fetch(`${BaseURL}/todos/${id}.json`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({description}),
        })
          .then(response => {
            if (!response.ok) {
              reject(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            let resData: any = data;
            console.log('r: ', resData);

            resolve({
              description,
              id,
            });
          })
          .catch(error => {
            reject(error);
          });
      },
    );
  },
);

interface updateStatusParams {
  id: string;
  pending: boolean;
}

export const updateTodoStatus = createAsyncThunk(
  'todo/updateStatus',
  async ({id, pending}: updateStatusParams) => {
    return new Promise((resolve: ResolveType<string>, reject: RejectType) => {
      fetch(`${BaseURL}/todos/${id}.json`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({pending: !pending}),
      })
        .then(response => {
          if (!response.ok) {
            reject(`HTTP error! Status: ${response.status}`);
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          console.log('hj: ', data);

          resolve(id);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
);

export const deleteTodo = createAsyncThunk(
  'todo/delete',
  async (id: string) => {
    const response = await fetch(`${BaseURL}/todos/${id}.json`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return new Promise((resolve: ResolveType<string>, reject: RejectType) => {
      fetch(`${BaseURL}/todos/${id}.json`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          if (!response.ok) {
            reject(`HTTP error! Status: ${response.status}`);
          } else {
            return response.json();
          }
        })
        .then(data => {
          resolve(id);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
);
