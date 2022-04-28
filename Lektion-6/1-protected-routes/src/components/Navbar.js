import { Link, NavLink } from 'react-router-dom'
// import { useContext } from 'react'
// import { AuthContext } from '../contexts/AuthContext'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = ({title}) => {

  // const { isAuthenticated } = useContext(AuthContext)
  const { isAuthenticated } = useAuthContext()

  return (
    <nav className='navbar'>
      <div className='container d-flex'>
        <Link to="/"><h1>{title}</h1></Link> 
        <ul className='d-flex'>
          {/* { isAuthenticated && <li><NavLink to="/admin">Admin</NavLink></li>} */}
          <li><NavLink to="/admin">Admin</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
          <li>{isAuthenticated ? 'LoggedIn' : 'LoggedOUT'}</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar