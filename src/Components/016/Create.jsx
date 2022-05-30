import { useState } from 'react';

function Create(add) {
    const [name, setName] = useState('');
    const [color, setColor] = useState('');

    const clickAdd = () => {
        const obj = { name, color };
        add(obj);
        setName('');
        setColor('');
    };

    return (
        <div>
            <div className="card m-4">
                <div className="card-header">Add to list</div>
                <div className="card-body">
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Color</label>
                        <input
                            type="text"
                            className="form-control"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
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
        </div>
    );
}

export default Create;
