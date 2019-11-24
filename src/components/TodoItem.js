import React, {Component} from "react";
import PropTypes from "prop-types";
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
    return {
      background: "#fffd8e",
      padding: "5px",
      borderBottom: "5px #9e8702 double",
      textDecoration: this.props.todoVariable.completed
        ? "line-through"
        : "none"
    };
  };
  //markComplete is a method
  //takes in event parameter

  render() {
    const {id, title} = this.props.todoVariable;
    return (
    //or {backgroundColor: '#FFFF00'}
    //each to do item will have this background in background
    <div style={this.getStyle()}>
      <p>
        {" "}
       <input type="checkbox"  onChange={this.props.markComplete.bind(this, id)}/>{" "}
        {title}
        <button onClick={this.props.deleteTodo.bind(this, id)} style={btnStyle}>
          {" "}
          X{" "}
        </button>
      </p>
    </div>);
  }
}
TodoItem.propTypes = {
  todoVariable: PropTypes.object.isRequired
};
const btnStyle = {
  background:"#fffd8e",
  color: "#9e8702",
  border: "dotted" ,
  padding: "1px 4px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};

export default TodoItem;
