import {combineReducers} from 'redux';
import initialState from './initialState';

function todos(state = initialState.todos, action = []) {
    switch (action.type) {
        case "LOAD_TODOS":
            return action.todos;

        case "ADD_TODO_SUCCESS":
            return [...state, Object.assign({}, action.todo)];
    
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    // Short Hand propety name
    todos
});

export default rootReducer;