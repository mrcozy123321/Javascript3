import { useState } from 'react'
// import axios from 'axios'

const CreatePostView = () => {

  const [formData, setFormData] = useState({
    title: '',
    body: ''
  })

  const onChange = e => {
    setFormData(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    // const res = await axios.post('http://localhost:8080/posts', formData)
    // console.log(res)
  }

  return (
    <div className='create-post'>
      <h1>Create new post</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name='title' onChange={onChange} value={formData.title} placeholder='title' className='form-control' />
        <textarea name="body" value={formData.body} onChange={onChange} placeholder='please enter some text...' className='form-control' cols="30" rows="10"></textarea>
        <button className='btn'>Add post</button>
      </form>
    </div>
  )
}

export default CreatePostView