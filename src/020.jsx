import './App.scss';
import './bootstrap.css';
import { BrowserRouter, Link, Route, Routes, NavLink } from 'react-router-dom';
import Alabama from './Components/020/Alabama';
import Racoon from './Components/020/Racoon';
import Cockou from './Components/020/Cockoo';
import Bear from './Components/020/Bear';
import Lion from './Components/020/Lion';
import NotFound from './Components/020/NotFound';
import rand from './Functions/rand';
import randColor from './Functions/randColor';

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="card m-4">
                            <div className="card-header">
                                <h2>Head</h2>
                            </div>

                            <div className="card-body">
                                <div className="links">
                                    <Link to="/">Sweet Home Alabama</Link>
                                    <h2>Racoon</h2>
                                    {[...Array(rand(2, 11))].map((_, i) => (
                                        <NavLink
                                            style={({ isActive }) => ({
                                                color: isActive ? 'black' : '',
                                            })}
                                            key={i}
                                            to={'/racoon/' + (i + 1)}
                                        >
                                            Racoon Home No: {i + 1}
                                        </NavLink>
                                    ))}
                                    <h2>Cuckoo</h2>
                                    {[...Array(rand(3, 7))].map((_, i) => (
                                        <Link
                                            key={i}
                                            to={
                                                '/cuckoo/' +
                                                (i + 1) +
                                                '/' +
                                                randColor(false)
                                            }
                                        >
                                            Cuckoo Nest No: {i + 1}
                                        </Link>
                                    ))}
                                    <h2>Bear</h2>
                                    <Link to="/bear">Bear Cave</Link>
                                    <Link to="/lion">Lion in Savana</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-8">
                        <div className="card m-4">
                            <div className="card-header">
                                <h2>Head</h2>
                            </div>

                            <div className="card-body">
                                <Routes>
                                    <Route
                                        path="/"
                                        element={<Alabama></Alabama>}
                                    ></Route>
                                    <Route
                                        path="/racoon/:id"
                                        element={<Racoon></Racoon>}
                                    ></Route>
                                    <Route
                                        path="/cuckoo/:nest/:color"
                                        element={<Cockou></Cockou>}
                                    ></Route>
                                    <Route path="/bear" element={<Bear></Bear>}>
                                        <Route
                                            path="big"
                                            element={
                                                <div
                                                    className="kv"
                                                    style={{
                                                        backgroundColor:
                                                            'black',
                                                    }}
                                                ></div>
                                            }
                                        ></Route>
                                        <Route
                                            path="small"
                                            element={
                                                <div
                                                    className="kv"
                                                    style={{
                                                        backgroundColor: 'pink',
                                                    }}
                                                ></div>
                                            }
                                        ></Route>
                                    </Route>
                                    <Route path="/lion" element={<Lion></Lion>}>
                                        <Route
                                            path="grass"
                                            element={
                                                <div
                                                    className="kvc kv c1"
                                                    style={{
                                                        backgroundColor:
                                                            'green',
                                                    }}
                                                ></div>
                                            }
                                        ></Route>
                                        <Route
                                            path="forest"
                                            element={
                                                <div
                                                    className="kvc kv c1"
                                                    style={{
                                                        backgroundColor:
                                                            'brown',
                                                    }}
                                                ></div>
                                            }
                                        ></Route>
                                        <Route
                                            path="rain"
                                            element={
                                                <div
                                                    className="kvc kv c1"
                                                    style={{
                                                        backgroundColor: 'blue',
                                                    }}
                                                ></div>
                                            }
                                        ></Route>
                                    </Route>
                                    <Route
                                        path="*"
                                        element={<NotFound></NotFound>}
                                    ></Route>
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
