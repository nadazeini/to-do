import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () =>
    /*{
        if(this.props.todoVariable.completed){
            return{
                textDecoration: 'line-through'
            }
        }
        else{
            return{
                textDecoration: 'none'
            }
        }
    }*/
    //use ternary operator 
    {
        return{
        background: '#f08080',
        padding : '10px',
        borderBottom : '3px #98fb98 double',
        textDecoration:  this.props.todoVariable.completed ? 'line-through': 'none'
        }
    }
    //markComplete is a method
    markComplete = (e) =>{
        console.log(this.props)
    }
    
    render() {
        return (
            //or {backgroundColor: '#FFFF00'}
            //each to do item will have this background in background
            <div style = {this.getStyle()}> 
          
                <p>  <input type = 'checkbox' onChange={this.props.markComplete.bind(this)} />
                {' '}
                {this.props.todoVariable.title}
                </p>
            </div>
        )
    }
}
TodoItem.propTypes = {
    todoVariable: PropTypes.object.isRequired
}

export default TodoItem
 