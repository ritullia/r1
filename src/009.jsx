import { useEffect, useState } from 'react';
import './App.scss';
import Kvadratukas from './Components/009/Kvadratukas';
import axios from 'axios';
import Users from './Components/009/Users';
import Users2 from './Components/009/Users2';
import Posts from './Components/009/Posts';

function App() {
    const [sq, setSq] = useState([]);

    const add = () => setSq((s) => [...s, 1]);

    const [users, setUsers] = useState([]);

    const [user, setUser] = useState([]);

    const [title, setTitle] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
            console.log(res.data);
            setUsers(res.data);
        });
    }, []); //Users

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            console.log(res.data);
            setTitle(res.data);
        });
    }, []); //Posts

    // const stringLength = title.filter((title) => {
    //     return title.length > 10;
    // });

    useEffect(() => {
        axios.get('https://dummyjson.com/users?limit=10').then((res) => {
            console.log(res.data.users);
            setUser(res.data.users);
        });
    }, []); //Users 10

    return (
        <div className="App">
            <header className="App-header">
                <h1>USE eFFeCt</h1>

                <button onClick={add}>add</button>
                <div className="kvadratukai">
                    {sq.map((_, i) => (
                        <Kvadratukas key={i} i={i}></Kvadratukas>
                    ))}
                </div>
                <div>
                    {users.map((u) => (
                        <Users key={u.id} user={u}></Users>
                    ))}
                </div>
                <div>
                    {user.map((u) => (
                        <Users2 key={u.id} user={u}></Users2>
                    ))}
                </div>
                <div>
                    {title

                        .sort((a, b) => b.title.length - a.title.length)
                        .filter(
                            (title) => [7, 3, 4].indexOf(title.userId) !== -1
                        )
                        .map((t) => (
                            <Posts key={t.id} index={t} title={t}></Posts>
                        ))}
                </div>
            </header>
        </div>
    );
}

export default App;
