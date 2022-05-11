import './App.css';
import Rainbow from './Components/003/Rainbow';


const rainbow = [
    {color:'crimson', size: 30},
    {color:'orange',  size: 14},
    {color:'yellow',  size: 52},
    {color:'green',  size: 27},
    {color:'skyblue', size: 40},
    {color:'blue', size: 17},
    {color:'purple', size: 22}
];

function App() {
  return (

    <div className="App">
      <header className="App-header">
       <h1>Lists</h1>
        <Rainbow colors={rainbow}></Rainbow>
      
      </header>
    </div>
  );
}

export default App;
