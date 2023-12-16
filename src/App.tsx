import './App.css';
import UserCard from './components/UserCard/UserCard';
import generateCard from './utils/generateCard';

function App() {
  const {name, strength, defence, img} = generateCard();
  return (
    <div className="App">
      <h1>Cat Card POC</h1>
      <div style={{display: "grid", justifyContent: "center"}}>
        <h3>single card view</h3>
        <UserCard name={name} strength={strength} defence={defence} img={img} />
      </div>
    </div>
  );
}

export default App;
