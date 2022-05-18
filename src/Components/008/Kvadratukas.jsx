function Kvadratukas({ i }) {
    return (
        <div
            className="kvadratukas"
            style={{
                borderRadius: i % 2 ? '50%' : '0',
            }}
        ></div>
    );
}

export default Kvadratukas;
