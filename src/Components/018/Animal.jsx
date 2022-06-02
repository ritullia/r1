function Animal({ animal, index, setDeleteAnimalData }) {
    return (
        <li className="list-group-item">
            <div className="item">
                <div className="content">
                    <b>#{index}</b>

                    <span>
                        {' '}
                        {animal.name} {animal.age}
                        {''}
                    </span>
                    <span
                        className={
                            (animal.has_owner ? 'yes' : 'no') + ' yes-no'
                        }
                    ></span>
                    <small>
                        {['Cat', 'Dog', 'Rat', 'Racoon'][animal.type - 1]}
                    </small>
                </div>
                <div className="buttons">
                    <button
                        type="button"
                        className="btn btn-outline-success mr-2"
                    >
                        Edit
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-danger mr-2"
                        onClick={() => setDeleteAnimalData(animal)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </li>
    );
}

export default Animal;
