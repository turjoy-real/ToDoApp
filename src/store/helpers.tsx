import {Task} from '../../types';
import BaseURL from '../constants/baseUrl';

export class Services {
  async POST(todo: Task) {
    const response = await fetch(`${BaseURL}/todos.json`, {
      method: 'POST',
      body: JSON.stringify({...todo}),
    });
    if (!response.ok) {
      return Promise.reject(`HTTP error! Status: ${response.status}`);
    }
    const resData = await response.json();

    return resData;
  }

  async GET() {
    const response = await fetch(`${BaseURL}/todos.json`);

    if (!response.ok) {
      return Promise.reject(`HTTP error! Status: ${response.status}`);
    }
    const resData = await response.json();

    return resData;
  }
}
