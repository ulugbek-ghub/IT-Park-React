import React from 'react'
import Layout from '../components/navbar'
import Dashboard from '../pages/Dashboard'
import { Routes, Route } from 'react-router-dom'
import About from '../pages/About'
import Settings from '../pages/Settings'
import Contact from '../pages/Contact'
import Error from '../pages/Error'
import UserDetails from '../pages/userDetails/userDetails'
import Users from '../pages/userDetails'
import Guest from '../pages/Contact/guest'
import AuthGuard from './routes/authGuard'

const App = () => {
  return (
    <div className="app-wrapper">
      <Layout>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/about' element={<About />} />

          <Route element={<AuthGuard />}>
            <Route path='settings' element={<Settings />} />
            <Route path='users' element={<Users />} />
            <Route path='contact' element={<Contact />}>
              <Route path='guest' element={<Guest />} />
            </Route>
          </Route>

          <Route path='users/:id' element={<UserDetails />} />

          <Route path='*' element={<Error />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App