import {addTodo, deleteTodo, fetchTodos} from '../actions/todo';
import {Services} from '../helpers';

import {server} from '../../__mock__/server';
// import {handlers} from '../../__mock__/handlers';
import store from '..';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('redux tests', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  const mockId = '123';

  it('should fetch data fulfilled', async () => {
    await store.dispatch(fetchTodos());

    expect(store.getState().todo).toEqual({
      data: [
        {
          description: 'todo 1',
          id: '-NsjUY5FNijKFGUUzC7Q',
          pending: true,
        },
        {
          description: 'todo 2',
          id: '-NsjUZ2nhml69EBr-K6c',
          pending: false,
        },
      ],
      error: undefined,
      status: 'success',
    });
  });

  it('should post data fulfilled', async () => {
    // jest
    //   .spyOn(Services.prototype, 'POST')
    //   .mockResolvedValueOnce({name: mockId});

    await store.dispatch(addTodo('mock arg'));

    expect(store.getState().todo).toEqual({
      data: [
        {
          description: 'todo 1',
          id: '-NsjUY5FNijKFGUUzC7Q',
          pending: true,
        },
        {
          description: 'todo 2',
          id: '-NsjUZ2nhml69EBr-K6c',
          pending: false,
        },
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

  it('should delete data fulfilled', async () => {
    await store.dispatch(deleteTodo(mockId));

    expect(store.getState().todo).toEqual({
      data: [
        {
          description: 'todo 1',
          id: '-NsjUY5FNijKFGUUzC7Q',
          pending: true,
        },
        {
          description: 'todo 2',
          id: '-NsjUZ2nhml69EBr-K6c',
          pending: false,
        },
      ],
      error: undefined,
      status: 'success',
    });
  });
});
