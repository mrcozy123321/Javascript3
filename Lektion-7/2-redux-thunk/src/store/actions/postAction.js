import actiontypes from "../actiontypes";
import axios from 'axios'

export const getPostById = (id) => {
  return async dispatch => {
    dispatch(loadPostStart())

    try {
      const res = await axios.get('http://localhost:8080/posts/' + id)
      dispatch(loadPostSuccess(res.data))
    }
    catch (err) {
      dispatch(loadPostFailure(err.message))
    }
  }
}

const loadPostStart = () => {
  return {
    type: actiontypes().post.loadPostStart
  }
}

const loadPostSuccess = (post) => {
  return {
    type: actiontypes().post.loadPostSuccess,
    payload: post
  }
}

const loadPostFailure = (err) => {
  return {
    type: actiontypes().post.loadPostFailure,
    payload: err
  }
}

export const clearPost = () => {
  return {
    type: actiontypes().post.clearPost
  }
}