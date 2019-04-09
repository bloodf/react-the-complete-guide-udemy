import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
  state = {
    counter: 0,
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case 'inc':
        this.setState((prevState) => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case 'dec':
        this.setState((prevState) => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case 'add':
        this.setState((prevState) => {
          return { counter: prevState.counter + value };
        });
        break;
      case 'sub':
        this.setState((prevState) => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label='Increment'
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label='Decrement'
          clicked={this.props.onDecreaseCounter}
        />
        <CounterControl
          label='Add 5'
          clicked={() => this.props.onIncrementValueCounter(5)}
        />
        <CounterControl
          label='Subtract 5'
          clicked={() => this.props.onDecreaseValueCounter(5)}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store Result
        </button>
        <ul>
          {this.props.results.map((r) => (
            <li key={r.id} onClick={() => this.props.onDeleteResult(r.id)}>
              {r.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter.counter,
    results: state.result.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
    onDecreaseCounter: () => dispatch({ type: 'DECREASE' }),
    onIncrementValueCounter: (value) =>
      dispatch({ type: 'INCREMENT_VALUE', value }),
    onDecreaseValueCounter: (value) =>
      dispatch({ type: 'DECREASE_VALUE', value }),
    onStoreResult: (result) => dispatch({ type: 'STORE_RESULT', result }),
    onDeleteResult: (id) => dispatch({ type: 'DELETE_RESULT', id }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
