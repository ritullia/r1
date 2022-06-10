import { useContext } from 'react';
import Number3 from './Number3';
import Number5 from './Number5';
import Number9 from './Nuber9';

function Va({ number }) {
    const { number3, number7, setNumber9 } = useContext(Number3);
    // const { number9 } = useContext(Number9);
    // const number5 = useContext(Number5);
    return (
        <div>
            <h2>{number}</h2>
            <h2>{number3}</h2>
            <Number5.Consumer>{(value) => <h2>{value}</h2>}</Number5.Consumer>
            <Number9.Consumer>{(value) => <h2>{value}</h2>}</Number9.Consumer>

            <h2>{number7}</h2>
            <div>
                <button className="a" onClick={() => setNumber9((n) => n + 9)}>
                    +9
                </button>
            </div>
        </div>
    );
}

export default Va;
