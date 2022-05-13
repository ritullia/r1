import './App.css';
import FatCat from './Components/004/FatCat';
import FatDog from './Components/004/FatDog';
import Lake from './Components/004/Lake'


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>State</h1>
       <FatCat color='brown'></FatCat>
       <FatDog color='skyblue'></FatDog>
       <Lake></Lake>
       
      </header>
    </div>
  );
}

export default App;