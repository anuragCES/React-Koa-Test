import { watchLoadTodos, watchAddTodo } from './todoSagas';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    watchLoadTodos(),
    watchAddTodo()
  ]
}
