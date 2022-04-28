import { useAuthContext } from '../hooks/useAuthContext'
import { Navigate, useLocation } from 'react-router-dom'

export const ProtectedRoute = ({ children }) => {

  const { isAuthenticated } = useAuthContext()
  const location = useLocation()

  return isAuthenticated 
  ? children
  : <Navigate to="/login" replace state={{ from: location.pathname }} />
}