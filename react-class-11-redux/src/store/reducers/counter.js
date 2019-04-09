const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT') {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === 'DECREASE') {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }
  if (action.type === 'INCREMENT_VALUE') {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }
  if (action.type === 'DECREASE_VALUE') {
    return {
      ...state,
      counter: state.counter - action.value,
    };
  }
  return state;
};

export default reducer;
