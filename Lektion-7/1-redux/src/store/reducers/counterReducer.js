import actionTypes from "../actionTypes";
const initState = 0

const counterReducer = (state = initState, action) => {
  switch(action.type) {
    case actionTypes().counter.increment:
      return state + 1
    case actionTypes().counter.decrement:
      return state - 1
    default:
      return state
  }
}

export default counterReducer;