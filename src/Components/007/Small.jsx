import { useState } from 'react';
import randomcolor from '../../Functions/randomcolor';

function Small({ side, sc, top, border }) {
    const [color, setColor] = useState(null);

    if (!sc) {
        return null;
    }

    return (
        <div
            className="too-small clickable"
            onClick={() => setColor(randomcolor())}
            style={{
                left: side === 'left' ? '-10px' : null,
                right: side === 'right' ? '-10px' : null,
                top: top + 'px',
                backgroundColor: color,
                borderWidth: border + 'px',
            }}
        ></div>
    );
}

export default Small;
