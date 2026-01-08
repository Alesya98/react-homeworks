import { Component } from "react";

class MyComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Count изменился:", this.state.count);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.count % 2 === 0;
  }

  render() {
    return (
      <>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>+</button>
      </>
    );
  }
}

export default MyComp;
