import "./App.css";
import Hellochild from './Components/Hello/hellochild';

function App() {
  const users = [
    { name: "Jorj Washington", profession: "Prezident", age: 67, img: "Image-1.jpg" },
    { name: "Elon Musk", profession: "Biznesmen", age: 47, img: "Image-2.jpg" },
    { name: "Stiv Jobs", profession: "Apple ceo", age: 56, img: "Image-3.jpg" },
    { name: "Bill Geyts", profession: "MICROsoft Ceo", age: 68, img: "Image-4.jpg" },
    { name: "Donld Tramp", profession: "Prezident", age: 69, img: "Image-5.jpg" },
    { name: "Gofur Ruziev", profession: "Dasturchi", age: 33, img: "Image-6.png" },
    { name: "Shavkat MIrziyoyev", profession: "Prezident", age: 59, img: "Image-7.jpg" }
  ];

  return (
    <div>
      {users.map((user, index) => (
        <Hellochild 
          key={index}
          name={user.name} 
          profession={user.profession} 
          age={user.age} 
          userImage={user.img} 
        />
      ))}
    </div>
  );
}

export default App;