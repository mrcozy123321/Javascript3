import {useContext} from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const Post = ({post, deletePost}) => {

  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark

  return (
    <div className='post' style={{ backgroundColor: theme.ui, color: theme.text }} onClick={() => deletePost(post.id)}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}

export default Post