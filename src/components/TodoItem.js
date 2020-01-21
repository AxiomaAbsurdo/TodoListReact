import React, { Component } from "react";
import PropTypes from "prop-types";
//import Todos from './Todos'

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  markComplete = e => {
    console.log(this.props);
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      // <div style= { itemStyle }>
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            Delete
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  fontWeight: "bold",
  padding: "10px 20px 10px",
  borderRadius: "2px",
  cursor: "pointer",
  float: "right"
};
// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }

export default TodoItem;
