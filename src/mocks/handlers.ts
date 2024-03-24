import {delay, http, HttpResponse} from 'msw';
import mockedApiResponse from './mockedApiResponse.json';
export const handlers = [
  http.get('api/todos', async ({request, params, cookies}) => {
    await delay(150);
    return HttpResponse.json(mockedApiResponse);
  }),
  http.patch('api/todos', async ({request, params, cookies}) => {
    await delay(150);
    return HttpResponse.json(mockedApiResponse);
  }),
  http.post('api/todos', async ({request, params, cookies}) => {
    await delay(150);
    return HttpResponse.json(mockedApiResponse);
  }),
  http.delete('api/todos', async ({request, params, cookies}) => {
    await delay(150);
    return HttpResponse.json(mockedApiResponse);
  }),
];
