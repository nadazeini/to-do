import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
class Todos extends Component{
   
    render(){
        //console.log(this.props.todos);  
        return this.props.todos.map((todoVariable) =>(
            <TodoItem key = {todoVariable.id} todoVariable=
             {todoVariable} markComplete = {this.props.markComplete}
             deleteTodo = {this.props.deleteTodo}/>
            //<h3>{todoVariable.title } </h3>
        ));
}
}
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}
export default Todos;
