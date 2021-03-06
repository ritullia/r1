import { useState } from 'react';

function Create({ add }) {
    const [name, setName] = useState('');
    const [color, setColor] = useState('');

    const [select, setSelect] = useState('M');

    const [red, setRed] = useState(false);
    const [width, setWidth] = useState('150');

    const [count, setCount] = useState('');

    const clickAdd = () => {
        const obj = { name, color, select, red, width, count };
        add(obj);
        setName('');
        setColor('');
        setSelect('M');
        setRed(false);
        setWidth('150');
        setCount('');
    };

    return (
        <div className="card m-4">
            <div className="card-header">Add to list</div>
            <div className="card-body">
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div className="form-group">
                    <label>Color</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setColor(e.target.value)}
                        value={color}
                    />
                </div>
                <div className="form-group">
                    <label> Size Select</label>
                    <select
                        className="form-control"
                        onChange={(e) => setSelect(e.target.value)}
                        value={select}
                    >
                        <option value="S">"S"</option>
                        <option value="M">"M"</option>
                        <option value="L">"L"</option>
                    </select>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        onChange={() => setRed((r) => !r)}
                        checked={red}
                    />
                    <label className="form-check-label">Red or Not</label>
                </div>
                <div className="form-group">
                    <label>Width: {width} m</label>
                    <input
                        type="range"
                        min="1"
                        max="300"
                        className="form-control"
                        onChange={(e) => setWidth(e.target.value)}
                        value={width}
                    />
                </div>
                <div className="form-group">
                    <label>Count</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setCount(e.target.value)}
                        value={count}
                    />
                </div>
                <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={clickAdd}
                >
                    ADD
                </button>
            </div>
        </div>
    );
}

export default Create;
