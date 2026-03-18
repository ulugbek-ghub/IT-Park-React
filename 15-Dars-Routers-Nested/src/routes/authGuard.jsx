import { Navigate, Outlet } from 'react-router'

const isAuthenticated = () => {
  return localStorage.getItem('token') == null
}

const AuthGuard = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to='/' replace />
}

export default AuthGuard