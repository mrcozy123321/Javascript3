import { combineReducers } from "redux";
import postReducer from "./postsReducer";
import postsReducer from "./postsReducer";

export default combineReducers({
  posts: postsReducer,
  post: postReducer
})