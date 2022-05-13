const actiontypes = () => {
  return {
    auth: {},
    posts: {
      setPosts: 'SET_POSTS',
      loading: 'LOADING',
      failure: 'POST_FAILURE',
      addNewPost: 'ADD_NEW_POST'
    },
    post: {
      loadPostStart: 'LOAD_POST_START',
      loadPostSuccess: 'LOAD_POST_SUCCESS',
      loadPostFailure: 'LOAD_POST_FAILURE',
      clearPost: 'CLEAR_POST'
    }
  }
}

export default actiontypes