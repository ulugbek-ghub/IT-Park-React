// Props(properties) - ota componentdan childga componentga malumot yuborish uchun ishlatiladi

import { useState } from 'react'
import './App.css'

import Hellochild from './Components/Hello/hellochild'


function App() {
const data = {
  name: "Jorj Washington",
  profession: "Prezident",
  age: 34
}

const company = "Al Xorazmiy Vorislari"
  return (
    <>
      <Hellochild
      name={data.name}
      profession={data.profession}
      age={data.age}
      />


      <Hellochild
      name="Asad" profession={company} age={data.age}
      />
    </>
  )
}

export default App