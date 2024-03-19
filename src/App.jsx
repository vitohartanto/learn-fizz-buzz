import React from "react";

const CounterDisplay = ({ count }) => {
  if (count === 0) {
    return <p>{count}</p>;
  } else if (count % 5 === 0 && count % 7 === 0) {
    return <p>FizzBuzz</p>;
  } else if (count % 5 === 0) {
    return <p>Fizz</p>;
  } else if (count % 7 === 0) {
    return <p>Buzz</p>;
  }

  return <p>{count}</p>;
};

const IncreaseButton = ({ increase }) => {
  return (
    <div>
      <button onClick={increase}>+ increase</button>
    </div>
  );
};

const ResetButton = ({ reset }) => {
  return (
    <div>
      <button onClick={reset}>- reset</button>
    </div>
  );
};

class CounterApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
    this.onResetEventHandler = this.onResetEventHandler.bind(this);
  }

  onIncreaseEventHandler() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  onResetEventHandler() {
    this.setState({
      count: 0,
    });
  }
  render() {
    return (
      <div>
        <IncreaseButton increase={this.onIncreaseEventHandler} />
        <CounterDisplay count={this.state.count} />
        <ResetButton reset={this.onResetEventHandler} />
      </div>
    );
  }
}

export default CounterApp;
