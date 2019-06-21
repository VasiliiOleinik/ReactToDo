import React, { Component } from "react";
import "./add-item.css";

export default class AddItem extends Component {
  render() {
    // const { onAdded } = this.props;
    return (
      <div className="add-item top-panel d-flex">
        <input type="text" className="form-control search-input" />
        <button
          className="btn btn-info"
		  onClick={() => this.props.onAdded('Hello World')}>
          Add task
        </button>
      </div>
    );
  }
}
