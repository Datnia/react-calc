import React, { Component } from "react";
import Panel from "./Panel";
import Display from "./Display";
import Key from "./Key";
import math from "mathjs";
import update from "immutability-helper";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: []
    };
  }

  handleClick = event => {
    const value = event.target.getAttribute("data-value");
    switch (value) {
      case "clear":
        this.setState({
          total: []
        });
        break;
      case "equal":
        this.getTotal();
        break;
      default:
        const newTotal = update(this.state.total, {
          $push: [value]
        });
        this.setState({
          total: newTotal
        });
        break;
    }
  };

  getTotal = () => {
    let result = this.state.total.join("");
    if (result) {
      result = math.eval(result);
      result = math.format(result, { precision: 14 });
      result = String(result);
      this.setState({
        total: [result]
      });
    }
  };
  render() {
    return (
      <div className="container">
        <Display data={this.state.total} />
        <Panel>
          <div>
            <Key onClick={this.handleClick} name="AC" value="clear" />
            <Key onClick={this.handleClick} name="/" value="/" />
            <Key onClick={this.handleClick} name="*" value="*" />
            <Key onClick={this.handleClick} name="-" value="-" />
          </div>
          <div>
            <Key onClick={this.handleClick} name="7" value="7" />
            <Key onClick={this.handleClick} name="8" value="8" />
            <Key onClick={this.handleClick} name="9" value="9" />
            <Key onClick={this.handleClick} name="+" value="+" size="2" />
          </div>
          <div>
            <Key onClick={this.handleClick} name="4" value="4" />
            <Key onClick={this.handleClick} name="5" value="5" />
            <Key onClick={this.handleClick} name="6" value="6" />
          </div>
          <div>
            <Key onClick={this.handleClick} name="1" value="1" />
            <Key onClick={this.handleClick} name="2" value="2" />
            <Key onClick={this.handleClick} name="3" value="3" />
            <Key onClick={this.handleClick} name="=" value="equal" size="2" />
          </div>
          <div>
            <Key onClick={this.handleClick} name="0" value="0" />
            <Key onClick={this.handleClick} name="." value="." />
          </div>
        </Panel>
      </div>
    );
  }
}

export default App;
