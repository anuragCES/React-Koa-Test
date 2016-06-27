import 'babel-polyfill';
import React from 'react';  
import App from './components/App';  
import configureStore from './stores/configureStore';
import {Provider} from 'react-redux';

main();  
function main() { 

    var store = configureStore();
    const action = type => store.dispatch({type});
    console.log("loadTodos 1");
    store.dispatch(action("LOAD_TODOS_START"));
    console.log("loadTodos 2");
    const app = document.createElement('div');    
    document.body.appendChild(app);    
    React.render(
        <Provider store={store}>
            <App /> 
        </Provider>,
    app); 
}