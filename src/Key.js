import React, { Component } from "react";

class Key extends Component {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        data-value={this.props.value}
        data-size={this.props.size}
      >
        {this.props.name}
      </button>
    );
  }
}

export default Key;
