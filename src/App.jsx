import { useEffect, useReducer, useState } from 'react';
import './App.scss';
import axios from 'axios';
import booksReducer from './Reducers/booksReducer';
import {
    sortByName,
    getDefault,
    getPrice,
    getAll,
    getFromServer,
    getNewBookAction,
} from './Actions/booksAction';

function App() {
    const [books, dispachBooks] = useReducer(booksReducer, []);

    const [newBooksData, setNewBooksData] = useState(false);

    useEffect(() => {
        axios.get('https://in3.dev/knygos/').then((res) => {
            dispachBooks(getFromServer(res.data));
        });
    }, [newBooksData]);

    const getNewBook = () => {
        dispachBooks(getNewBookAction());
        setNewBooksData((newBooksData) => !newBooksData);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Books</h1>
                <div className="kvc">
                    <div>
                        {books.length ? (
                            books.map((b) =>
                                b.show ? (
                                    <div key={b.id}>
                                        {b.title} {'  '}
                                        <small style={{ color: '#8FFF33' }}>
                                            {b.price} EUR
                                        </small>
                                    </div>
                                ) : null
                            )
                        ) : (
                            <h2>Loading...</h2>
                        )}
                    </div>
                </div>
                <button
                    className="a"
                    onClick={() => dispachBooks(sortByName())}
                >
                    Sort by name
                </button>
                <button
                    className="a"
                    onClick={() => dispachBooks(getDefault())}
                >
                    Default
                </button>
                <button className="a" onClick={() => dispachBooks(getPrice())}>
                    Price more 13
                </button>
                <button className="a" onClick={() => dispachBooks(getAll())}>
                    Show All
                </button>
                <button className="a" onClick={getNewBook}>
                    GET NEW
                </button>
            </header>
        </div>
    );
}

export default App;
