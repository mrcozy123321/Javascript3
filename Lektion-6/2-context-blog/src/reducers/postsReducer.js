import actiontypes from "./actiontypes"

export const postsReducer = (state, action) => {
  switch(action.type){
    case actiontypes().posts.addPost:
      let post = {
        id: Date.now().toString(),
        title: action.payload.title,
        body: action.payload.body
      }
      return [post, ...state]
    case actiontypes().posts.deletePost:
      return state.filter(post => post.id !== action.payload)

    default:
      return state
  }
}