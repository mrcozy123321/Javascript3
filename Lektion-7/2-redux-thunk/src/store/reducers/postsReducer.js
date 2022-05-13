import actiontypes from "../actiontypes";

const initState = {
  data: [],
  loading: false,
  error: null
}

const postsReducer = (state = initState, action) => {
  switch(action.type) {
    case actiontypes().posts.loading:
      return {
        ...state,
        loading: action.payload
      }

    case actiontypes().posts.setPosts:
      return {
        data: action.payload,
        loading: false,
        error: null
      }

    case actiontypes().posts.failure:
      return {
        data: [],
        loading: false,
        error: action.payload
      }

    case actiontypes().posts.addNewPost:
      return {
        ...state,
        data: [...state.data, action.payload],
        loading: false,
        error: null
      }

    default:
      return state
  }
}

export default postsReducer;