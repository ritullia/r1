import './App.scss';
import './bootstrap.css';
import { useState } from 'react';
import NameColor from './Components/016/NameColor';
import rand from './Functions/rand';
import Edit from './Components/016/Edit';
import Create from './Components/016/Create';

function App() {
    const [list, setList] = useState([]); //listo rodymas
    const [modal, setModal] = useState(null); //modal rodymas

    const add = (obj) => {
        obj.id = rand(10000, 99999);
        setList((oldList) => [...oldList, obj]);
    };

    const edit = (obj) => {
        setList((oldList) => oldList.map((o) => (o.id === obj.id ? obj : o)));
    };

    const sortName = () => {
        setList((oldList) => {
            return [...oldList].sort((a, b) => {
                if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                return 0;
            });
        });
    };

    const sortColor = () => {
        setList((oldList) => {
            return [...oldList].sort((a, b) => {
                if (a.color.toLowerCase() > b.color.toLowerCase()) return 1;
                if (a.color.toLowerCase() < b.color.toLowerCase()) return -1;
                return 0;
            });
        });
    };

    const deleteList = (id) => {
        // console.log(obj.id);
        setList((oldList) => oldList.filter((obj) => obj.id !== id));
    };

    const clearList = () => setList([]);

    return (
        <>
            <div className="App">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <Create add={add}></Create>
                        </div>
                        <div className="col-8">
                            <div className="card m-4">
                                <div className="card-header">List</div>
                                <div className="card-body">
                                    <ul className="list-group">
                                        {list.map((obj, i) => (
                                            <NameColor
                                                key={obj.id}
                                                obj={obj}
                                                ind={i + 1}
                                                deleteList={deleteList}
                                                setModal={setModal}
                                            ></NameColor>
                                        ))}
                                    </ul>
                                    <button
                                        type="button"
                                        className="btn btn-outline-warning mt-2 ml-2"
                                        onClick={sortName}
                                    >
                                        Sort Name
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-info mt-2 ml-2"
                                        onClick={sortColor}
                                    >
                                        Sort Color
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-dark mt-2 ml-2"
                                        onClick={clearList}
                                    >
                                        Clear List
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Edit modal={modal} setModal={setModal} edit={edit}></Edit>
            </div>
        </>
    );
}

export default App;
