function Hello({ color, afrika, makeGreen }) {
    return (
        <>
            <h3 style={{ color: color }}> Hello {afrika}</h3>
            <button className="a" onClick={makeGreen}>
                Green
            </button>
        </>
    );
}

export default Hello;
