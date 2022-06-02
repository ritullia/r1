import { useEffect, useState } from 'react';

function Edit({ modal, setModal, edit }) {
    console.log(Edit);
    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [select, setSelect] = useState('M');
    const [red, setRed] = useState(false);
    const [width, setWidth] = useState('150');
    const [count, setCount] = useState('');

    const clickEdit = () => {
        const obj = {
            name,
            color,
            id: modal.id,
            select,
            red,
            width,
            count: parseInt(count) + parseInt(modal.count),
        };
        edit(obj);
        setModal(null);
    };

    useEffect(() => {
        if (null === modal) {
            return;
        }
        setName(modal.name);
        setColor(modal.color);
        setCount('');
    }, [modal]);

    if (!modal) {
        return null;
    }

    console.log(modal);

    return (
        <div className="modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit List</h5>
                        <button
                            type="button"
                            className="close"
                            onClick={() => setModal(null)}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
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
                        <div>{modal.count}</div>
                    </div>

                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={() => setModal(null)}
                        >
                            Close
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-primary"
                            onClick={clickEdit}
                        >
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Edit;
