import React from 'react'
import Layout from '../components/navbar'
import Dashboard from '../pages/Dashboard'
import { Routes, Route } from 'react-router'
import About from '../pages/About'
import Settings from '../pages/Settings'
import Contact from '../pages/Contact'
import Error from '../pages/Error'

const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
            <Route path='/' element= {<Dashboard/>}/>
            <Route path='/about' element= {<About/>}/>
            <Route path='/settings' element= {<Settings/>}/>
            <Route path='/contact' element= {<Contact/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
      </Layout>
    </div>
  )
}

export default App
