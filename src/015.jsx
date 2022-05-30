import { useState } from 'react';
import './App.scss';
// import List1 from './Components/015/List1';
import List2 from './Components/015/List2';

function App() {
    const cars = [
        { id: 1, type: 'MB', color: 'blue', price: 45874.01 },

        { id: 4, type: 'Volvo', color: 'pink', price: 54658.0 },

        { id: 17, type: 'MB', color: 'black', price: 6465.77 },

        { id: 47, type: 'Opel', color: 'blue', price: 89791.77 },

        { id: 10, type: 'Scania', color: 'red', price: 44624.0 },

        { id: 107, type: 'BMW', color: 'red', price: 98591.0 },

        { id: 44, type: 'BMW', color: 'yellow', price: 789.3 },

        { id: 78, type: 'MB', color: 'blue', price: 64598.0 },

        { id: 99, type: 'Tesla', color: 'gray', price: 78944.0 },
    ];

    const [showCar, setShowCar] = useState(null);

    const [activeCar, setActiveCar] = useState(0);

    const [kva, setKva] = useState([]);

    return (
        <div className="App">
            <header className="App-header">
                <h1>REPEAT PART 2</h1>
                <h2>{showCar ? showCar.type : null}</h2>
                <div className="kvadratukai">
                    {kva.map((k, i) => (
                        <div
                            style={{ backgroundColor: k }}
                            key={i}
                            className="kvadratukas"
                        ></div>
                    ))}
                </div>
                <button
                    className="a"
                    onClick={() => setKva((k) => [...k, 'skyblue', 'gray'])}
                >
                    ADD []
                </button>

                <h2>{showCar ? showCar.type : null}</h2>

                <List2
                    cars={cars}
                    setShowCar={setShowCar}
                    activeCar={activeCar}
                    setActiveCar={setActiveCar}
                ></List2>
                {/* <List1 cars={cars}></List1> */}
            </header>
        </div>
    );
}

export default App;
