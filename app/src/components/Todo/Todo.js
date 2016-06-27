import React from 'react';  
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as todoActions from './../../actions/todoActions'

class Todo extends React.Component {  

    constructor(props, context) {
        super(props, context);

        this.state = {
            todo: Object.assign({}, props.todo)
        }

        this.updateFieldValues = this.updateFieldValues.bind(this);
        this.addTodoItem = this.addTodoItem.bind(this);
    }
    
    updateFieldValues(event){
        const field = event.target.name;
        let todo = this.state.todo;
        todo[field] = event.target.value;
        return this.setState({todo: todo});
    }

    addTodoItem(event){
        event.preventDefault();
        this.props.actions.addTodo(this.state.todo);
        this.setState({todo: Object.assign({}, this.props.todo)});
    }
    
    render() {    
        return (
            <div>
                <h2>Todos</h2>
                <AddTodo 
                    todo={this.state.todo} 
                    addTodo = {this.addTodoItem}
                    onChange={this.updateFieldValues}
                />
                <TodoList todos={this.props.todos}/>
            </div>    
        );   
    }
}

function mapStatetoProps(state, ownProps){
    "use strict";
    let todo = {id: "", value: ""};
    return {
        todo,
        todos: state.todos
    };
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(todoActions, dispatch)
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Todo);