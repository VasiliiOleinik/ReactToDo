import React, { Component } from "react";
import "./add-item.css";

export default class AddItem extends Component {
  state = {
    label: ""
  };

  onLabelChange = e => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
	this.props.onAdded(this.state.label);
	this.setState({
		label: ''
	})
  };

  render() {
    // const { onAdded } = this.props;
    return (
      <form className="add-item top-panel d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control search-input"
          onChange={this.onLabelChange}
          value={this.state.label}
        />
        <button
          className="btn btn-info"
          onClick={() => this.props.onAdded("Hello World")}
        >
          Add task
        </button>
      </form>
    );
  }
}
