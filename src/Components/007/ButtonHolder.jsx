function ButtonHolder(virvute, border) {
    return (
        <div
            className="bth"
            style={{
                borderWidth: border + 'px',
            }}
        >
            <button onClick={virvute}>Border</button>
        </div>
    );
}

export default ButtonHolder;
