import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='container'>
        <Link to="/"><h1>My Blog</h1></Link>
        <ul className='nav-links'>
          <li><NavLink className={({ isActive }) => (isActive ? 'active-link' : 'inactive')} to="/">Posts</NavLink></li>
          <li><NavLink className={({ isActive }) => (isActive ? 'active-link' : 'inactive')} to="/create">New Post</NavLink></li>
          <button className='btn btn-sm btn-dark'>Dark</button>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar