export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return { type: DECREMENT };
};

export const add = () => {
  return { type: ADD, val: 10 };
};

export const substract = () => {
  return { type: SUBTRACT, val: 15 };
};

export const storeResult = (result) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: STORE_RESULT, result: result });
    }, 2000);
  };
};

export const deleteResult = (id) => ({
  type: DELETE_RESULT,
  resultElId: id,
});
