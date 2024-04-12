import {delay, http, HttpResponse} from 'msw';
import mockedApiResponse from './mockedApiResponse.json';
import BaseURL from '../constants/baseUrl';
import {server} from './server';

const allPosts = new Map();

afterEach(() => server.resetHandlers());

export const handlers = [
  http.delete(
    `${BaseURL}/todos/:id.json`,
    async ({request, params, cookies}) => {
      const {id} = params;
      const deletedPost = allPosts.get(id);

      // Respond with a "404 Not Found" response if the given
      // post ID does not exist.
      if (!deletedPost) {
        return new HttpResponse(null, {status: 404});
      }
      console.log('delete tested');

      // Delete the post from the "allPosts" map.
      allPosts.delete(id);

      // Respond with a "200 OK" response and the deleted post.
      return HttpResponse.json(deletedPost);
    },
  ),
  http.get(`${BaseURL}/todos.json`, async ({request, params, cookies}) => {
    // const {id} = params;
    // const deletedPost = allPosts.get(id);

    // // Respond with a "404 Not Found" response if the given
    // // post ID does not exist.
    // if (!deletedPost) {
    //   return new HttpResponse(null, {status: 404});
    // }
    // console.log('delete tested');

    // // Delete the post from the "allPosts" map.
    // allPosts.delete(id);

    // Respond with a "200 OK" response and the deleted post.
    return HttpResponse.json(mockedApiResponse);
  }),
];
