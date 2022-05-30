import './App.scss';
import './bootstrap.css';
import { useState } from 'react';
import Hello from './Components/014/Hello';
import Lists from './Components/014/List';

function App() {
    const labas = () => {
        console.log('Labas');
    };

    const [text, setText] = useState('');
    const [red, setRed] = useState('white');
    const [red2, setRed2] = useState('white');
    const [afrika, setAfrika] = useState('');

    const ate = () => {
        setText('Ate');
    };

    const noAte = () => {
        setText('');
        setRed('white');
    };

    const showHideAte = () => {
        setText((t) => (t === 'Ate' ? '' : 'Ate')); //arba
        // setText((t) => (t ? '' : 'Ate'));
    };

    const makeGreen = () => {
        setRed('green');
    };

    const colorRed = () => {
        setRed('red');
    };
    const makeRed = () => {
        setRed2('crimson');
    };
    const helloAfrika = () => {
        setAfrika('Africa');
    };

    const reset = () => {
        setAfrika('');
        setRed2('white');
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>REPEAT</h1>
                <Lists></Lists>

                <Hello
                    color={red2}
                    afrika={afrika}
                    makeGreen={makeGreen}
                ></Hello>
                <h2
                    style={{
                        color: red,
                    }}
                >
                    {text}
                </h2>

                <div className="sqc">
                    <button className="a" onClick={labas}>
                        Labas
                    </button>
                    <button className="a" onClick={ate}>
                        Ate
                    </button>
                    <button className="a" onClick={noAte}>
                        No Ate
                    </button>
                    <button className="a" onClick={showHideAte}>
                        Show Ate
                    </button>
                </div>
                <div className="sqc">
                    <button className="a" onClick={colorRed}>
                        Color Ate
                    </button>
                    <button className="a" onClick={makeRed}>
                        Red Hello
                    </button>
                    <button className="a" onClick={helloAfrika}>
                        Afrika
                    </button>
                    <button className="a" onClick={reset}>
                        Reset
                    </button>
                </div>
            </header>
        </div>
    );
}

export default App;
