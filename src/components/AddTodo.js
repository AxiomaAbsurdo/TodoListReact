import React, { Component } from "react";
import PropTypes from "prop-types";
import './AddTodo.css';

export class AddTodo extends Component {
  state = {
    title: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} style={{ display: "flex", marginTop: "5px", marginBottom: "5px" }}>
          <input
            type="text"
            name="title"
            placeholder="Add Todo..."
            style={{
              flex: "10",
              padding: "5px",
              marginRight: "5px",
              border: "1px solid",
              borderRadius: "2px"
            }}
            value={this.state.title}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Submit"
            className="submitBtn"
            style={{ flex: "1" }}
          />
        </form>
      </div>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddTodo;
