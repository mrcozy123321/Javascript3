import { useState, useContext } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PostsView from './views/PostsView';
import CreatePost from './views/CreatePost';
import { ThemeContext } from './contexts/ThemeContext';
import { PostsContextProvider } from './contexts/PostsContext';

function App() {

  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark
  
  return (
    <div className="App">
      <Navbar />
      <div className='bg' style={{ backgroundColor: theme.bg }}>
        <div className="container">
          <PostsContextProvider>
            <Routes>
              <Route path='/' element={ <PostsView /> } />
              <Route path='/create' element={ <CreatePost /> } />
            </Routes>
          </PostsContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
