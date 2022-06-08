import { useReducer, useState } from 'react';
import './App.scss';
import rand from './Functions/rand';
import randColor from './Functions/randColor';
import colorReducer from './Reducers/colorReducer';
import textReducer from './Reducers/textReducer';
import numberReducer from './Reducers/numberReducer';

function App() {
    // REDUCER'iai
    const [color, dispachColor] = useReducer(colorReducer, 'yellow');
    const [text, dispachText] = useReducer(textReducer, '0000');
    const [number, dispachNumber] = useReducer(numberReducer, []);

    // COLOR INPUT state
    const [colorList, setColorList] = useState('#fffff');
    const [textH1, setTextH1] = useState('');
    const [numberN, setNumberN] = useState('');

    const handleColor = (e) => {
        setColorList(e.target.value);
    };

    const doBlack = () => {
        const action = {
            type: 'make_black',
        };
        dispachColor(action);
    };

    const doBlue = () => {
        const action = {
            type: 'make_blue',
        };
        dispachColor(action);
    };

    const togleSwitch = () => {
        const action = {
            type: 'make_blue_black',
        };
        dispachColor(action);
    };
    const randBtn = () => {
        const action = {
            type: 'make_rand_color',
        };
        dispachColor(action);
    };
    const doRand = () => {
        const action = {
            type: 'make_rand_color2',
            payload: randColor(),
        };
        dispachColor(action);
    };
    const doChangeColor = () => {
        const action = {
            type: 'change_background',
            payload: colorList,
        };
        dispachColor(action);
    };
    const doNewText = () => {
        const action = {
            type: 'make_new_text',
            payload: rand(1000, 9999),
        };
        dispachText(action);
    };
    const inputText = () => {
        const action = {
            type: 'make_new',
            payload: textH1,
        };
        dispachText(action);
    };
    const inputRandText = () => {
        const action = {
            type: 'make_rand_text',
            payload: textH1,
        };
        dispachText(action);
    };
    const doNumberArr = () => {
        const action = {
            type: 'make_number_arr',
        };
        dispachNumber(action);
    };
    const sortNumber = () => {
        const action = {
            type: 'sort_number_arr',
        };
        dispachNumber(action);
    };
    const defaultNumber = () => {
        const action = {
            type: 'def_sort_number_arr',
        };
        dispachNumber(action);
    };
    const addNumber = () => {
        const action = {
            type: 'push_number',
        };
        dispachNumber(action);
    };
    const filterList = () => {
        const action = {
            type: 'filter_list',
        };
        dispachNumber(action);
    };
    const filterListSmall = () => {
        const action = {
            type: 'filter_list_small',
        };
        dispachNumber(action);
    };
    const showAll = () => {
        const action = {
            type: 'show_list',
        };
        dispachNumber(action);
    };
    const filterNumber = () => {
        const action = {
            type: 'filter_number',
            payload: numberN,
        };
        dispachNumber(action);
    };

    // useEffect(()=>{
    //     if(numberN === 0){
    //         return
    //     }
    //     const filterNumber = () => {
    //         const action = {
    //             type: 'filter_number',
    //             payload: numberN,
    //         };
    //         dispachNumber(action);

    //     }

    // }; [numberN])

    return (
        <div className="App">
            <header className="App-header">
                <h1 style={{ backgroundColor: color }} className="reducer">
                    {text}
                </h1>
                {number.map((d, i) =>
                    d.show ? (
                        <div key={i} style={{ color: d.color }}>
                            {d.number}
                        </div>
                    ) : null
                )}
                <input
                    type="color"
                    className="form-control"
                    onChange={handleColor}
                    value={colorList}
                ></input>

                <div>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setTextH1(e.target.value)}
                        value={textH1}
                    ></input>
                </div>
                <div>
                    <input
                        type="number"
                        className="form-control"
                        min="0"
                        max="1000"
                        step="50"
                        onChange={(e) => setNumberN(e.target.value)}
                        value={numberN}
                    ></input>
                </div>

                <div className="kvc">
                    <button className="a btn" onClick={doBlack}>
                        Black
                    </button>
                    <button className="a btn" onClick={doBlue}>
                        Blue
                    </button>
                    <button className="a btn" onClick={togleSwitch}>
                        Blue/Black
                    </button>
                    <button className="a btn" onClick={randBtn}>
                        Random1
                    </button>
                    <button className="a btn" onClick={doRand}>
                        Random2
                    </button>
                    <button className="a btn" onClick={doChangeColor}>
                        Change
                    </button>
                </div>
                <div className="kvc">
                    <button className="a btn" onClick={doNewText}>
                        Random Text
                    </button>
                    <button className="a btn" onClick={inputText}>
                        Change Text
                    </button>
                    <button className="a btn" onClick={inputRandText}>
                        Change Text 2
                    </button>
                </div>
                <div className="kvc">
                    <button className="a btn" onClick={doNumberArr}>
                        Number
                    </button>
                    <button className="a btn" onClick={sortNumber}>
                        Sort Number
                    </button>
                    <button className="a btn" onClick={defaultNumber}>
                        Default Sort
                    </button>
                    <button className="a btn" onClick={addNumber}>
                        Push Number
                    </button>
                </div>
                <div className="kvc">
                    <button className="a btn" onClick={filterList}>
                        Filter List
                    </button>
                    <button className="a btn" onClick={filterListSmall}>
                        Filter Small
                    </button>
                    <button className="a btn" onClick={showAll}>
                        Show ALL
                    </button>
                    <button className="a btn" onClick={filterNumber}>
                        Number
                    </button>
                </div>
            </header>
        </div>
    );
}

export default App;
