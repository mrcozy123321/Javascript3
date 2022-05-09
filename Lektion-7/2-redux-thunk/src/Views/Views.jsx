import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NewsView from './NewsView'
import PostDetailsView from './PostDetailsView'

const Views = () => {
  return (
    <Routes>
      <Route path='/' element={ <NewsView /> } />
      <Route path='/posts/:id' element={ <PostDetailsView /> } />
    </Routes>
  )
}

export default Views