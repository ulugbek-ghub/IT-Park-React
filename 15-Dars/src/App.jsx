import React from 'react'
import Layout from '../components/navbar'
import Dashboard from '../pages/Dashboard'

const App = () => {
  return (
    <div>
      <Layout>
        <Routes>
            <Route path='/' element= {<Dashboard/>}/>
            <Route path='/about' element= {<About/>}/>
            <Route path='/settings' element= {<Settings/>}/>
            <Route path='/contact' element= {<Contact/>}/>
        </Routes>
      </Layout>
    </div>
  )
}

export default App
