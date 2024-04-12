import {configureStore} from '@reduxjs/toolkit';
import {todoSlice} from '../reducers/todo';

import {addTodo, deleteTodo, fetchTodos} from '../actions/todo';
import {Services} from '../helpers';

import {server} from '../../mocks/server';
import {handlers} from '../../mocks/handlers';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('redux tests', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  const store = configureStore({reducer: todoSlice.reducer});
  it('should post data fulfilled', async () => {
    const mockId = '123';

    jest
      .spyOn(Services.prototype, 'POST')
      .mockResolvedValueOnce({name: mockId});

    await store.dispatch(addTodo('mock arg'));

    expect(store.getState()).toEqual({
      data: [
        {
          description: 'mock arg',
          id: mockId,
          pending: true,
        },
      ],
      error: undefined,
      status: 'success',
    });
  });

  // Other reducers
  it('should fetch data fulfilled', async () => {
    // const mockId = '123';

    // jest.spyOn(Services.prototype, 'GET').mockResolvedValueOnce({
    //   '-NsjUY5FNijKFGUUzC7Q': {
    //     description: 'todo 1',
    //     pending: true,
    //   },
    //   '-NsjUZ2nhml69EBr-K6c': {
    //     description: 'todo 2',
    //     pending: false,
    //   },
    // });
    server.use(handlers[0]);

    await store.dispatch(fetchTodos());

    console.log('ff: ', store.getState());

    // expect(store.getState()).toEqual({
    //   data: [
    //     {
    //       description: 'todo 1',
    //       id: '-NsjUY5FNijKFGUUzC7Q',
    //       pending: true,
    //     },
    //     {
    //       description: 'todo 2',
    //       id: '-NsjUZ2nhml69EBr-K6c',
    //       pending: false,
    //     },
    //   ],
    //   error: undefined,
    //   status: 'success',
    // });
  });

  it('should delete data fulfilled', async () => {
    const mockId = '123';

    // jest
    //   .spyOn(Services.prototype, 'POST')
    //   .mockResolvedValueOnce({name: mockId});

    await store.dispatch(deleteTodo('123'));

    console.log('hh: ', store.getState());

    // expect(store.getState()).toEqual({
    //   data: [],
    //   error: undefined,
    //   status: 'success',
    // });
  });
});
