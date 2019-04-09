const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === 'STORE_RESULT') {
    return {
      ...state,
      results: state.results.concat({
        id: new Date(),
        value: action.result,
      }),
    };
  }
  if (action.type === 'DELETE_RESULT') {
    return {
      ...state,
      results: state.results.filter((i) => i.id !== action.id),
    };
  }
  return state;
};

export default reducer;
