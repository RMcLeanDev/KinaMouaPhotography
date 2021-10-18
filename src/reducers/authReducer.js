import constants from './../constants';
const {types, authState} = constants

const authReducer = (state = authState, action) => {
  let newState;
  switch (action.type) {
    case types.TEST_FUNCTION:
      newState = state;
        console.log("test_function")
      return newState;
    default:
      return state;
  }
}

export default authReducer;
