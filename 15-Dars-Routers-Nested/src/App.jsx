import React from 'react'
import Layout from '../components/navbar'
import Dashboard from '../pages/Dashboard'
import { Routes, Route, Router } from 'react-router-dom'
import About from '../pages/About'
import Settings from '../pages/Settings'
import Contact from '../pages/Contact'
import Error from '../pages/Error'
import UserDetails from '../pages/userDetails/userDetails'
import Users from '../pages/userDetails'
import Guest from '../pages/Contact/guest'
import AuthGuards from './routes/authGuard'

const App = () => {
  return (
    <div className="app-wrapper">
      <Layout>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/about' element={<About />} />
          <Route path='settings' element={<authGuard> <Settings/> </authGuard>} />
          <Route path='contact' element= {<authGuard> <Contact/> </authGuard>} />

          <Route path=':id' element= {<UserDetails />} />

{/* 
          <Route path='guest' element={<Guest />}>
          </Route> */}

          {/* <Route path='/contact' element={<Contact />} /> */}
          {/* <Route path='/users' element= {<Users />}> 
          </Route> */}
          <Route path='*' element={<Error />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App


// Dinamik router
// Nested
// AuthGuard