import { useState } from 'react';
import './App.scss';

function App() {
    const [show, setShow] = useState(true);

    const [show1, setShow1] = useState(true);

    const [color, setColor] = useState('blue');

    const [counter, setCounter] = useState(1);

    const doShow = () => {
        setShow((s) => !s); //panaudojamas callback funkcija
    };
    const doShow1 = () => {
        setShow1((s) => !s);
    };
    const makeRed = () => {
        setColor('red');
    };
    const makeYellow = () => {
        setColor('yellow');
    };
    const countNumber = () => {
        setCounter((s) => s + 1);
    };
    const minNumber = () => {
        setCounter((s) => s - 1);
    };

    return (
        <div className="App">
            <header className="App-header">
                {show ? (
                    <div
                        className="square"
                        style={{ backgroundColor: color }}
                    ></div>
                ) : null}
                {show1 ? (
                    <div
                        className="square"
                        style={{ backgroundColor: color }}
                    ></div>
                ) : null}

                <h1>HOOK {counter}</h1>

                <button onClick={doShow}>Show/Hide 1</button>
                <button onClick={doShow1}>Show/Hide 2</button>
                <button onClick={makeRed}>Make Red</button>
                <button onClick={makeYellow}>Make Yellow</button>
                <button onClick={countNumber}>Add One</button>
                <button onClick={minNumber}>Remove One</button>
            </header>
        </div>
    );
}

export default App;
