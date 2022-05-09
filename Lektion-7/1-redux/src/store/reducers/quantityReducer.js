import actionTypes from "../actionTypes";

const initState= 0;

const quantityReducer = (state = initState, action) => {
  switch(action.type) {
    case actionTypes().quantity.increment:
      return state + action.payload

    case actionTypes().quantity.decrement:
      return state - action.payload
      
    default:
      return state
  }
}

export default quantityReducer