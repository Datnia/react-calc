import React, { Component } from "react";

class Display extends Component {
  render() {
    const data = this.props.data.join("");
    return <div className="Display">{data}</div>;
  }
}

export default Display;
