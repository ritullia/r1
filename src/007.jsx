import { useState } from 'react';
import './App.scss';
import BlueSquare from './Components/007/BlueSquare';

function App() {
    const [sc, setSc] = useState(false);

    const clickLabas = () => {
        setSc((s) => !s); // vienas is variantu kai galima toogle
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1
                    className="clickable"
                    onClick={clickLabas}
                    style={{ letterSpacing: !sc ? '0.7px' : '8px' }}
                >
                    Labas
                </h1>
                <BlueSquare sc={sc}></BlueSquare>
            </header>
        </div>
    );
}

export default App;
