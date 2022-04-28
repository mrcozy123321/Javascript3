import React, { useEffect } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import { useNavigate, useLocation } from 'react-router-dom'

const Login = () => {
  const { login, isAuthenticated } = useAuthContext()
  const navigate = useNavigate()
  const { state } = useLocation()

  // const handleClick = () => {
    // login()
    // console.log(state)
    // navigate("/")
    // if(state) {
    //   navigate(state.from)
    // } else {
    //   navigate("/")
    // }
    // navigate(state?.from || "/")
  // }

  useEffect(() => {
    if(isAuthenticated) {
      navigate(state?.from || "/")
    }
  }, [isAuthenticated, navigate, state?.from])

  return (
    <div>
      <h1>Login</h1>
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login
