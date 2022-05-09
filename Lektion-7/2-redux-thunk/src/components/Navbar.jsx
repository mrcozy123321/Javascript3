import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <nav className='navbar'>
      <div className="container">
        <Link to="/" className='navbar-brand' >LOGO</Link>

        <ul className='nav-links'>
          <li><NavLink to="/" className="nav-link">News</NavLink></li>

          { isAuth
          ? <li><NavLink to="/create" className="nav-link">Create</NavLink></li>
          : <li><NavLink to="/login" className="nav-link">Login</NavLink></li>
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;