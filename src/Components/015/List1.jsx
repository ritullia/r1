// import { useState } from 'react';

function List1({ cars }) {
    return (
        <div className="lc">
            {/* <button className="a" onClick={showType}>
                Cars
            </button> */}
            <div className="list">
                {cars.map((c) => (
                    <div key={c.id}>
                        {c.type} <code>{c.price} EUR</code>
                    </div>
                ))}
            </div>
            <div className="list">
                {cars
                    .filter((c) => c.type === 'MB')
                    .map((c) => (
                        <div key={c.id}>
                            {c.type} <code>{c.price} EUR</code>
                        </div>
                    ))}
            </div>
            <div className="list">
                {cars.map((c) => (
                    <div key={c.id}>
                        {c.type}{' '}
                        <code style={{ color: c.color }}> {c.price} EUR</code>
                        <div>{c.price < 10000 ? <i>Akcija</i> : null}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default List1;
