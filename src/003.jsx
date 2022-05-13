import './App.css';
import Rainbow from './Components/003/Rainbow';


const rainbow = [
    {color:'crimson', size: 30, pos: 'top'},
    {color:'orange',  size: 14, pos: 'top'},
    {color:'yellow',  size: 52, pos: 'bottom'},
    {color:'green',  size: 27, pos: 'bottom'},
    {color:'skyblue', size: 40, pos: 'top'},
    {color:'blue', size: 17, pos: 'bottom'},
    {color:'purple', size: 22, pos: 'top'}
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
