import { useState } from 'react';
import randomcolor from '../../Functions/randomcolor';
import ButtonHolder from './ButtonHolder';
import Small from './Small';

function BlueSquare({ sc }) {
    const [bg, setBg] = useState('blue');

    const changeBg = () => {
        setBg((c) => (c === 'blue' ? 'red' : 'blue'));
    };

    const changeRand = () => {
        setBg(randomcolor());
    };

    const [border, setBr] = useState(1);

    const changeBr = () => {
        setBr((b) => (b === 10 ? 1 : 10));
    };

    return (
        <div
            className="squar blue"
            style={{
                backgroundColor: bg,
                borderRadius: sc ? '50%' : '0',
                borderWidth: border + 'px',
            }}
        >
            <button onClick={changeBg}>Change</button>
            <button onClick={changeRand}>Rand</button>
            <ButtonHolder virvute={changeBr} border={border}></ButtonHolder>
            <Small side="left" top={-60} sc={sc} border={border}></Small>
            <Small side="right" top={-60} sc={sc} border={border}></Small>
            <Small side="" top={160} sc={sc} border={border}></Small>
        </div>
    );
}

export default BlueSquare;
