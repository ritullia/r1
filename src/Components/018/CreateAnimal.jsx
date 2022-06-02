import { useState } from 'react';

function CreateAnimal({ setCreateAnimalData }) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const [type, setType] = useState('1');
    const [owner, setOwner] = useState(false);

    const clickAdd = () => {
        setCreateAnimalData({
            name,
            type,
            age,
            has_owner: owner ? '1' : '0',
        });
        setName('');
        setAge('');
        setType('1');
        setOwner(false);
    };

    return (
        <div className="card m-4">
            <div className="card-header">
                <h2>Add to Animal list</h2>
            </div>
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
                    <label>Age</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setAge(e.target.value)}
                        value={age}
                    />
                </div>
                <div className="form-group">
                    <label>Type select</label>
                    <select
                        className="form-control"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option value="1">Cat</option>
                        <option value="2">Dog</option>
                        <option value="3">Rat</option>
                        <option value="4">Racoon</option>
                    </select>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="has-owner"
                        checked={owner}
                        onChange={() => setOwner((owner) => !owner)}
                    ></input>
                    <label className="form-check-label">Has Owner</label>
                </div>
                <button
                    type="button"
                    className="btn btn-outline-primary mt-4"
                    onClick={clickAdd}
                >
                    ADD
                </button>
            </div>
        </div>
    );
}

export default CreateAnimal;
