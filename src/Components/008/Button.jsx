function Button({ clickButton, click, clicCol, clickAddSrc, dellSq }) {
    return (
        <div>
            <button onClick={clickButton}>Make Pink</button>
            <button onClick={click}>Click</button>
            <button onClick={clicCol}>Red Back</button>
            <button onClick={clickAddSrc}>Square</button>
            <button onClick={dellSq}>Square Dellete</button>
        </div>
    );
}

export default Button;
