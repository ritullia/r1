import { useEffect, useState } from 'react';

function Kvadratukas({ i }) {
    console.log(i);
    const [yes, setYes] = useState(true);

    const [index, setIndex] = useState();

    useEffect(() => {
        console.log('gime');
        //return () => console.log('numiro'); //pasileidzia, kai komponentas pasalinamas is DOM
    }, [yes]); //jeigu yra tuscias masyvas, pasileidzia tik kaip component yra sukuriamas

    useEffect(() => {
        setIndex(i);
    }, [i]);

    return (
        <div className="kvadratukas" onClick={() => setYes((y) => !y)}>
            {index}
        </div>
    );
}

export default Kvadratukas;
