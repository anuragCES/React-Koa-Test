import 'babel-polyfill';
import React from 'react';  
import App from './components/App';  
import configureStore from './stores/configureStore';
import {Provider} from 'react-redux';

main();
function main() { 

    var store = configureStore();
    const action = type => store.dispatch({type});
    store.dispatch(action("LOAD_TODOS_START"));
    const app = document.createElement('div');    
    document.body.appendChild(app);    
    React.render(
        <Provider store={store}>
            <App /> 
        </Provider>,
    app); 
}