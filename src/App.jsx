import { useCallback, useEffect, useState, useMemo } from 'react';
import './App.scss';
import Te from './Components/023/Te';
import Number3 from './Components/023/Number3';
import Number5 from './Components/023/Number5';

function App() {
    const [number, setNumber] = useState(0);
    const [number3, setNumber3] = useState(0);
    const [number5, setNumber5] = useState(0);
    const [number7, setNumber7] = useState(0);
    const [number9, setNumber9] = useState(0);

    const abc = useCallback(() => {
        //sukuriama callBack funkcija
        console.log('ABC' + number);
    }, [number]);

    useEffect(() => {
        // console.log('GO');
        abc();
    }, [abc]);

    const aaa = (a, b) => {
        console.log('skaiciuoja');
        return a + b;
    };

    const memoizedResult = useMemo(() => {
        return aaa(number, number3);
    }, [number, number3]);

    return (
        <Number5.Provider value={number5}>
            <Number3.Provider value={{ number3, number7, setNumber9 }}>
                <div className="App">
                    <header className="App-header">
                        <div className="kvc">
                            <button
                                className="a"
                                onClick={() => setNumber((n) => n + 1)}
                            >
                                Click
                            </button>
                            <button
                                className="a"
                                onClick={() => setNumber3((n) => n + 3)}
                            >
                                Click 3
                            </button>
                            <button
                                className="a"
                                onClick={() => setNumber5((n) => n + 5)}
                            >
                                Click 5
                            </button>
                            <button
                                className="a"
                                onClick={() => setNumber7((n) => n + 7)}
                            >
                                Click 7
                            </button>
                        </div>
                        <h1>Context {memoizedResult}</h1>
                        <h2>{number9}</h2>
                        <h2>
                            <Te number={number}></Te>
                        </h2>
                    </header>
                </div>
            </Number3.Provider>
        </Number5.Provider>
    );
}

export default App;
