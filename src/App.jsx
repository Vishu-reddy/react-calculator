import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import { Input } from "./components/Input";
import { Clear } from "./components/Clear";
import React, { Component } from "react";
import * as math from "mathjs";
class App extends Component {
  state = {
    input: "",
  };
  addtoinput = (val) => {
    if (val === "X") {
      val = "*";
    }
    this.setState({ input: this.state.input + val });
  };
  handleEqual = () => {
    if (this.state.input.length < 3) {
      return;
    }
    this.setState({ input: math.evaluate(this.state.input) });
  };
  handleClear = () => {
    console.log("clicked");
    this.setState({ input: "" });
  };
  render() {
    return (
      <div className="app">
        <div className="clac-wrapper">
          <Input input={this.state.input}></Input>
          <div className="row">
            <Button handleClick={this.addtoinput}>9</Button>
            <Button handleClick={this.addtoinput}>8</Button>
            <Button handleClick={this.addtoinput}>7</Button>
            <Button handleClick={this.addtoinput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addtoinput}>6</Button>
            <Button handleClick={this.addtoinput}>5</Button>
            <Button handleClick={this.addtoinput}>4</Button>
            <Button handleClick={this.addtoinput}>X</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addtoinput}>3</Button>
            <Button handleClick={this.addtoinput}>2</Button>
            <Button handleClick={this.addtoinput}>1</Button>
            <Button handleClick={this.addtoinput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addtoinput}>.</Button>
            <Button handleClick={this.addtoinput}>0</Button>
            <Button handleClick={() => this.handleEqual()}>=</Button>
            <Button handleClick={this.addtoinput}>-</Button>
          </div>
          <Clear handleClick={this.handleClear}></Clear>
        </div>
      </div>
    );
  }
}

export default App;
