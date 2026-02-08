import Hellochild from './Components/Hello/hellochild'
import './App.css'

function App() {
  const data = {
    name: "Jorj Washington",
    profession: "Prezident",
    age: 67
  }

  return (
    <div className="container">
      <Hellochild name={data.name} profession={data.profession} age={data.age} />
      <Hellochild name={data.name} profession={data.profession} age={data.age} />
      <Hellochild name={data.name} profession={data.profession} age={data.age} />
      <Hellochild name={data.name} profession={data.profession} age={data.age} />
      <Hellochild name={data.name} profession={data.profession} age={data.age} />
      <Hellochild name={data.name} profession={data.profession} age={data.age} />
      <Hellochild name={data.name} profession={data.profession} age={data.age} />
    </div>
  )
}

export default App