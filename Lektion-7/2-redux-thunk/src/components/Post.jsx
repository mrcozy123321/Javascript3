import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
  return (
      <Link className='post' to={`/posts/${post.id}`}>
        <h2>{post.title}</h2>
        <p>{post.body.slice(0,50)}...</p>
      </Link>
  )
}

export default Post