function Antras({ skaicius, color, size }) {
    return (
        <>
            {skaicius + 2 > 9 ? null : (
                <h2 className={size} style={{ color: color }}>
                    {skaicius + 2}
                </h2>
            )}
        </>
    );
}

export default Antras;
