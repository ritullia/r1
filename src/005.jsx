import { useState } from 'react';
import './App.scss';
import randomColor from './Functions/randomcolor';

function App() {
    const [show, setShow] = useState(true);

    const [show1, setShow1] = useState(true);

    const [color, setColor] = useState('blue');

    const [counter, setCounter] = useState(1);

    const [sq, setSq] = useState([]);

    // const doShow = () => {
    //     setShow((s) => !s); //panaudojamas callback funkcija
    // };
    // const doShow1 = () => {
    //     setShow1((s) => !s);
    // };

    const doSquares = () => {
        //setSq((s) => [...s, (s[s.length - 1] ?? 0) + 1]);
        setSq((s) => [...s, randomColor()]);
    };

    const doShowAll = (what) => {
        what ? setShow((s) => !s) : setShow1((s) => !s);
    };

    // const makeRed = () => {
    //     setColor('red');
    // };
    // const makeYellow = () => {
    //     setColor('yellow');
    // };

    const changeColor = (color) => setColor(color);

    // const countNumber = () => {
    //     setCounter((s) => s + 1);
    // };
    // const minNumber = () => {
    //     setCounter((s) => s - 1);
    // };

    const countNumber = (counter) => setCounter((s) => s + counter);

    return (
        <div className="App">
            <header className="App-header">
                <div className="sqc">
                    {sq.map((s, i) => (
                        <div
                            className="sq red"
                            key={i}
                            style={{ background: s }}
                        ></div>
                    ))}
                </div>
                <div className="sqc">
                    {show ? (
                        <div
                            className="sq pink"
                            style={{ backgroundColor: color }}
                        >
                            1
                        </div>
                    ) : null}
                    {show1 ? (
                        <div
                            className="sq red"
                            style={{ backgroundColor: color }}
                        >
                            2
                        </div>
                    ) : null}

                    <h1>HOOK {counter}</h1>
                    <div className="sqc">
                        <button onClick={doSquares}>Add Squares</button>
                        <button onClick={() => doShowAll(1)}>
                            Show/Hide 1
                        </button>
                        <button onClick={() => doShowAll(0)}>
                            Show/Hide 2
                        </button>
                        <button onClick={() => changeColor('red')}>
                            Make Red
                        </button>
                        <button onClick={() => changeColor('yellow')}>
                            {' '}
                            Make Yellow
                        </button>
                        <button onClick={() => countNumber(+1)}>Add One</button>
                        <button onClick={() => countNumber(-1)}>
                            Remove One
                        </button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
