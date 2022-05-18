import { useState } from 'react';
import './App.scss';
import Button from './Components/008/Button';
import Green from './Components/008/Green';
import Kvadratukas from './Components/008/Kvadratukas';

function App() {
    const [srs, setSrs] = useState([]);

    const clickAddSrc = () => setSrs((s) => [...s, 1]);

    const dellSq = () => setSrs((s) => s.slice(1)); // istrina kvadratus

    // sukuriam staciakampiui fonus
    const [green, setGreen] = useState('green');

    const clickButton = () => {
        setGreen((s) => (s === 'green' ? 'pink' : 'green'));
    };
    // prie vieneto pridedam 1+1
    const [number, setNumber] = useState(1);

    const click = () => {
        setNumber((n) => n + (col ? -1 : 1));
    };
    // ant numeriuko 1 atsiranda fonas
    const [col, setCol] = useState('false');

    const clicCol = () => {
        setCol((c) => !c);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    Uplifting{' '}
                    <span
                        style={{
                            color: green,
                            backgroundColor: col ? 'red' : null,
                            padding: '7px',
                        }}
                    >
                        {number}
                    </span>
                </h1>
                <div>
                    <Button
                        clickAddSrc={clickAddSrc}
                        clickButton={clickButton}
                        click={click}
                        clicCol={clicCol}
                        dellSq={dellSq}
                    ></Button>
                    <div>
                        <Green green={green}></Green>
                    </div>
                    <div className="kvadratukai">
                        {srs.map((_, i) => (
                            <Kvadratukas key={i} i={i}></Kvadratukas>
                        ))}
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
