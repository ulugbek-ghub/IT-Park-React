import { Navigate, Outlet } from 'react-router-dom'

const isAuthenticated = () => {
  return localStorage.getItem('token') !== null
}

const AuthGuard = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to='/' replace />
}

export default AuthGuard