import { useParams } from 'react-router-dom';

function Racoon() {
    const { id } = useParams();

    console.log(id);

    return (
        <>
            <h1>Racoon with can No {id}</h1>
        </>
    );
}

export default Racoon;
