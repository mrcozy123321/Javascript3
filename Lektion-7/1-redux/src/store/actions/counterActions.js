import actionTypes from "../actionTypes"


export const increment = () => {
  return {
    type: actionTypes().counter.increment
  }
}

export const decrement = () => {
  return {
    type: actionTypes().counter.decrement
  }
}