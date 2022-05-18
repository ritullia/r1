import './App.scss';
import Vienas from './Components/006/Vienas';
import Raides from './Components/006/Raides';
import Antras from './Components/006/Antras';
import Kvadratas from './Components/006/Kvadratas';

const labas = ['L', 'a', 'b', 'a', 's', ',', 'v', 'a', 'i', 'k', 'a', 'i', '!'];
const isColor = true;
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>UŽdavinukai</h1>
                {/* <Vienas skaicius={1} color="yellow" size="big"></Vienas>
                <Antras skaicius={2} color="cyan" size="small"></Antras>
                <Kvadratas color1="yellow" color2="green" forma="a"></Kvadratas> */}
                <div className="letters">
                    {labas.map((l, i) => (
                        <Raides key={i} l={l} i={i}></Raides>
                    ))}
                </div>
            </header>
        </div>
    );
}

export default App;
