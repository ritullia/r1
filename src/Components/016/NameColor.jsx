function NameColor({ obj, ind, deleteList, setModal }) {
    return (
        <li className="list-group-item">
            <div className="item">
                <div className="content">
                    <b>#{ind}</b> {obj.name} {obj.color}{' '}
                    <small>id:{obj.id}</small>
                </div>
                <div className="buttons">
                    <button
                        type="button"
                        className="btn btn-outline-success mr-2"
                        onClick={() => setModal(obj)}
                    >
                        Edit
                    </button>
                    <button
                        type="button"
                        className="btn btn-outline-danger mr-2"
                        onClick={() => deleteList(obj.id)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </li>
    );
}

export default NameColor;
