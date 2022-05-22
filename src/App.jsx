import './App.scss';
import './bootstrap.css';
import { useState } from 'react';

function App() {
    const [list1, setList1] = useState([]);
    const [text, setText] = useState('');

    const [list2, setList2] = useState([]);
    const [color, setColor] = useState('');

    const [list3, setList3] = useState([]);
    const [select, setSelect] = useState('');

    const [listSelect, setListSelect] = useState([]);
    const [textSelect, setTextSelect] = useState('');

    //sukuriam tekstui
    const handleText = (e) => {
        // setList1((l) => [...l, e.target.value]);
        setText(e.target.value);
    };

    //sukuriam spalvoms
    const handleColor = (e) => {
        setColor(e.target.value);
    };

    const handleSelect = (e) => {
        setSelect(e.target.value);
    };

    const handleTextSelect = (e) => {
        setTextSelect(e.target.value);
    };

    const addTextToList = () => {
        if (text === '') {
            return;
        }
        setList1((l) => [...l, text]);
        setText('');
    };

    const addColorToList = () => {
        setList2((l) => [...l, color ? color : '#0000000']);
    };

    const addSelectToList = () => {
        if (select === '') {
            return;
        }
        setList3((l) => [...l, select]);
    };

    const addTextToSelect = () => {
        if (textSelect === '') {
            return;
        }
        setListSelect((l) => [...l, textSelect]);
        setTextSelect('');
    };

    const clearList = () => setList1([]);
    const clearColorList = () => setList2([]);
    const clearList3 = () => setList3([]);

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="card m-4">
                            <div className="card-header">TEXT</div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Text input</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={handleText}
                                        value={text}
                                    ></input>
                                    <small className="form-text text-muted">
                                        Some little text.
                                    </small>
                                </div>
                                <button
                                    type="button"
                                    onClick={addTextToList}
                                    className="btn btn-outline-primary"
                                >
                                    Add to List
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card m-4">
                            <div className="card-header">TEXT LIST</div>
                            <div className="card-body">
                                <button
                                    type="button"
                                    onClick={clearList}
                                    className="btn btn-outline-danger"
                                >
                                    Clear List
                                </button>
                                <ul className="list-group mt-2">
                                    {list1.map((t, i) => (
                                        <li key={i} className="list-group-item">
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="card m-4">
                            <div className="card-header">COLOR</div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Color input</label>
                                    <input
                                        type="color"
                                        className="form-control"
                                        onChange={handleColor}
                                        value={color}
                                    ></input>
                                    <small className="form-text text-muted">
                                        Some color.
                                    </small>
                                </div>
                                <button
                                    type="button"
                                    onClick={addColorToList}
                                    className="btn btn-outline-primary"
                                >
                                    Add color
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card m-4">
                            <div className="card-header">COLOR LIST</div>
                            <div className="card-body">
                                <button
                                    type="button"
                                    onClick={clearColorList}
                                    className="btn btn-outline-danger"
                                >
                                    Clear List
                                </button>
                                <ul className="list-group mt-2">
                                    {list2.map((t, i) => (
                                        <li
                                            key={i}
                                            className="list-group-item"
                                            style={{ backgroundColor: t }}
                                        ></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="card m-4">
                            <div className="card-header">TEXT to SELECT</div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Text input</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={handleTextSelect}
                                        value={textSelect}
                                    ></input>
                                    <small className="form-text text-muted">
                                        Some little text
                                    </small>
                                </div>
                                <button
                                    type="button"
                                    onClick={addTextToSelect}
                                    className="btn btn-outline-primary"
                                >
                                    Add to Select
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card m-4">
                            <div className="card-header">SELECT</div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Select</label>
                                    <select
                                        className="form-control"
                                        onChange={handleSelect}
                                        value={select}
                                    >
                                        <option value="" disabled>
                                            SELECT
                                        </option>
                                        {listSelect.map((v, i) => (
                                            <option key={i} value={v}>
                                                {v}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <button
                                    type="button"
                                    onClick={addSelectToList}
                                    className="btn btn-outline-primary mt-2"
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="card m-4">
                            <div className="card-header">SELECT LIST</div>
                            <div className="card-body">
                                <button
                                    type="button"
                                    onClick={clearList3}
                                    className="btn btn-outline-warning"
                                >
                                    Clear List
                                </button>
                                <ul className="list-group mt-2">
                                    {list3.map((t, i) => (
                                        <li key={i} className="list-group-item">
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
