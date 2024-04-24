import {http, HttpResponse} from 'msw';
import mockedAPIResponse from './mockedAPIResponse';
import BaseURL from '../constants/baseUrl';
// import {server} from './server';
import store from '../store';

export const handlers = [
  http.delete(
    `${BaseURL}/todos/:id.json`,
    async ({request, params, cookies}) => {
      const {id} = params;

      // Respond with a "404 Not Found" response if the given
      // post ID does not exist.

      let found = store.getState().todo.data.findIndex(ele => ele.id === id);
      console.log(store.getState().todo.data, id, found);

      if (found == -1) {
        return new HttpResponse(null, {status: 404});
      }

      // Respond with a "200 OK" response and the deleted post.
      return HttpResponse.json(id);
    },
  ),
  http.get(`${BaseURL}/todos.json`, async ({request, params, cookies}) => {
    return HttpResponse.json(mockedAPIResponse);
  }),
  http.post(`${BaseURL}/todos.json`, async ({request, params, cookies}) => {
    return HttpResponse.json({name: '123'});
  }),
];
