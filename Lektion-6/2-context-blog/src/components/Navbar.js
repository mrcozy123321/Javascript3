import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'

const Navbar = () => {

  const { isLightTheme, light,dark, toggleTheme } = useContext(ThemeContext)
  const theme = isLightTheme ? dark : light

  return (
    <nav className='navbar'>
      <div className='container'>
        <Link to="/"><h1>My Blog</h1></Link>
        <ul className='nav-links'>
          <li><NavLink className={({ isActive }) => (isActive ? 'active-link' : 'inactive')} to="/">Posts</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive ? 'active-link' : 'inactive')} to="/create">New Post</NavLink></li>
          <button onClick={ toggleTheme } className='btn btn-sm btn-dark' style={{ color: theme.text, background: theme.ui }}>{isLightTheme ? 'Dark' : 'Light'}</button>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar