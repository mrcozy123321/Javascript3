import actionTypes from "../actionTypes"

export const increment = amount => {
  return {
    type: actionTypes().quantity.increment,
    payload: amount
  }
}

export const decrement = amount => {
  return {
    type: actionTypes().quantity.decrement,
    payload: amount
  }
}