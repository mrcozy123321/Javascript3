import {useContext} from 'react'
import { PostsContext } from '../contexts/PostsContext'
import { ThemeContext } from '../contexts/ThemeContext'
import actiontypes from '../reducers/actiontypes'

const Post = ({ post }) => {

  const { dispatch } = useContext(PostsContext)

  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark

  const deletePost = () => {
    dispatch({
      type: actiontypes().posts.deletePost,
      payload: post.id
    })
  }

  return (
    <div className='post' style={{ backgroundColor: theme.ui, color: theme.text }} onClick={deletePost()}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}

export default Post