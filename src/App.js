import React, { Component } from "react";
import MyComponent from "./MyComponent";

class App extends Component {
  state = {
    count: 1,
    erro: false
  };

  constructor(props) {
    super(props);
    console.log("constructor");
  }
  componentDidMount() {
    console.log("didMount");
  }
  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);

    this.setState({
      erro: true
    });
    //API 전송
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    if (this.state.erro) {
      return <div>Error</div>;
    }
    return (
      <div>
        <button onClick={this.handleClick}>CLick Me</button>
        {this.state.count < 10 && <MyComponent value={this.state.count} />}
      </div>
    );
  }
}

export default App;
