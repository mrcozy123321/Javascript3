import { createContext, useState, useReducer } from 'react'
import { postsReducer } from '../reducers/postsReducer'

export const PostsContext = createContext()

export const PostsContextProvider = ({ children }) => {

  const [posts, dispatch] = useReducer(postsReducer, [
    {
      id: 'awpuhpafw9g21',
      title: 'My first post',
      body: 'This is my first POST!'
    },
    {
      id: 'awp127tfpg1',
      title: 'My second post',
      body: 'This is my second POST!'
    },
    {
      id: 'awpuhgfp189',
      title: 'My third post',
      body: 'This is my third POST!'
    },
  ])

  // const [posts, setPosts] = useState([
  //   {
  //     id: 'awpuhpafw9g21',
  //     title: 'My first post',
  //     body: 'This is my first POST!'
  //   },
  //   {
  //     id: 'awp127tfpg1',
  //     title: 'My second post',
  //     body: 'This is my second POST!'
  //   },
  //   {
  //     id: 'awpuhgfp189',
  //     title: 'My third post',
  //     body: 'This is my third POST!'
  //   },
  // ])

  // const addPost = (title, body) => {
  //   let post = {
  //     id: Date.now().toString(),
  //     title,
  //     body
  //   }

  //   setPosts(state => {
  //     return [post, ...state]
  //   })
  // }

  // const deletePost = id => {
  //   setPosts(state => state.filter(post => post.id !== id))
  // }

  return (
    // <PostsContext.Provider value={{ posts, addPost, deletePost}}>
    <PostsContext.Provider value={{posts, dispatch}}>
      { children }
    </PostsContext.Provider>
  )
}
