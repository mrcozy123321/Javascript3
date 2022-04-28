import { useState, useContext } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PostsView from './views/PostsView';
import CreatePost from './views/CreatePost';
import { ThemeContext } from './contexts/ThemeContext';

function App() {

  const [posts, setPosts] = useState([
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

  const addPost = (title, body) => {
    let post = {
      id: Date.now().toString(),
      title,
      body
    }

    setPosts(state => {
      return [post, ...state]
    })
  }

  const deletePost = id => {
    setPosts(state => state.filter(post => post.id !== id))
  }

  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark
  
  return (
    <div className="App">
      <Navbar />
      <div className='bg' style={{ backgroundColor: theme.bg }}>
        <div className="container">
          <Routes>
            <Route path='/' element={ <PostsView posts={posts} deletePost={deletePost} /> } />
            <Route path='/create' element={ <CreatePost addPost={addPost} /> } />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
