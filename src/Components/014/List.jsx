import { useState } from 'react';

function Lists() {
    const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

    const [show, setShow] = useState(false);

    const showList = () => {
        setShow((s) => !s);
    };

    return (
        <div>
            <button className="a" onClick={showList}>
                Show
            </button>
            <div className="letters">
                {sizes.map((s, i) => (
                    <div key={i}>{s}</div>
                ))}
            </div>
            <div className="letters">
                {sizes.map((s, i) =>
                    i % 2 ? (
                        <div key={i} style={{ color: 'yellow' }}>
                            {s}
                        </div>
                    ) : (
                        <div key={i} style={{ color: 'red' }}>
                            {s}
                        </div>
                    )
                )}
            </div>
            <div className="letters">
                {sizes.map((s, i) =>
                    i % 2 ? (
                        <div key={i} style={{ color: 'yellow' }}>
                            <i>{s}</i>
                        </div>
                    ) : (
                        <div key={i} style={{ color: 'red' }}>
                            <u>{s}</u>
                        </div>
                    )
                )}
            </div>
            <div className="letters">
                {sizes
                    .filter((s, i) => s[0] === 'X')
                    .map((s, i) =>
                        i % 2 ? (
                            <div key={i} style={{ color: 'yellow' }}>
                                <i>{s}</i>
                            </div>
                        ) : (
                            <div key={i} style={{ color: 'red' }}>
                                <u>{s}</u>
                            </div>
                        )
                    )}
            </div>
            <div className="letters">
                {sizes
                    .sort((a, b) => b.length - a.length)
                    .map((s, i) => (
                        <div key={i + 1}>{s}</div>
                    ))}
            </div>
            <div className="letters">
                {sizes
                    .filter((_) => show)
                    .map((s, i) =>
                        i % 2 ? (
                            <div key={i} style={{ color: 'yellow' }}>
                                <i>{s}</i>
                            </div>
                        ) : (
                            <div key={i} style={{ color: 'red' }}>
                                <u>{s}</u>
                            </div>
                        )
                    )}
            </div>
        </div>
    );
}

export default Lists;
