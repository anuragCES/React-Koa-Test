import { takeEvery, delay } from 'redux-saga';
import { put, call , take} from 'redux-saga/effects';
import api from './../api/index';

// Our worker Saga: will perform the async task
export function* loadTodos() {  
  const todos = yield call(api.getAllTodos);
  yield put({type: "LOAD_TODOS", todos});
}

// Our watcher Saga: spawn a new task on each action
export function* watchLoadTodos() {
  yield* takeEvery("LOAD_TODOS_START", loadTodos);
}

export function* addTodo(action) {  
  const todo = yield call(api.addTodo, action.todo);
  yield put({type: "ADD_TODO_SUCCESS", todo});
}

export function* watchAddTodo() {
  yield* takeEvery("ADD_TODO_START", addTodo);
}
