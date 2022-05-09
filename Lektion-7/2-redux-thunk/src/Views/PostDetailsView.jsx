import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearPost, getPostById } from '../store/actions/postAction'
import { useParams } from 'react-router-dom'

const PostDetailsView = () => {

  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getPostById(id))

    return () => {
      dispatch(clearPost())
    }
  }, [])

  const { loading, data: post, error } = useSelector(state => state.post)

  const template = ( post &&
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )

  if(error)
    return (
      <div>
        <p>{error}</p>
      </div>
    )

  return (
    <div>
      {template}
      {loading && <p>Loading... </p>}
    </div>
  )
}

export default PostDetailsView