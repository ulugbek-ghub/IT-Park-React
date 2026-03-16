import React from 'react'
import { Navigate } from 'react-router'

const AuthGuards = ({auth, children}) => {
  if(!auth) return <Navigate to = {"/"} />
  return children
}

export default AuthGuards
