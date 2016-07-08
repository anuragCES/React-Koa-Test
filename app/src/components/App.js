import React from 'react';  
import Todo from './Todo/Todo';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

class App extends React.Component {  
  render() {
    return <Todo />;
  }
}

export default DragDropContext(HTML5Backend)(App);
