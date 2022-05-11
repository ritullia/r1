import './App.css';
import Car from './Components/002/Car';
import Square from './Components/002/Square';
import Tree from './Components/002/Tree'
import randomcolor from './Functions/randomcolor'
import rand from './Functions/rand'


function App() {
  return (

    <div className="App">
      <header className="App-header">
       <h1>Props</h1>
       {/* <Car square='15' maker='Opel' color='black' price={15000} size='10' font="'Courier New', Courier, monospace" marks='red'></Car>
       <Car square='45' maker='Volvo' color='red'  price={24000} size='25' font="'Times New Roman', Times, serif" marks='blue'></Car>
       <Car square='60' maker='Ford' color='green' price={11000} size='15' font="Arial, Helvetica, sans-serif" marks='green'></Car>
      <Tree size={8}></Tree>
      <Tree size={1}></Tree>
      <Tree size={5}></Tree> */}

      <Square color={randomcolor()} size={rand(50, 300)}></Square>
      <Square color={randomcolor()} size={rand(50, 300)}></Square>
      <Square color={randomcolor()} size={rand(50, 300)}></Square>
      <Square color={randomcolor()} size={rand(50, 300)}></Square>
      <Square color={randomcolor()} size={rand(50, 300)}></Square>
      
      </header>
    </div>
  );
}

export default App;
