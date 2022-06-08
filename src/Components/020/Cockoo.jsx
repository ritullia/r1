import { useParams } from 'react-router-dom';

function Cockou() {
    const { nest, color } = useParams();
    console.log(nest);

    return (
        <>
            <h1 style={{ color: '#' + color }}>
                Cockoo Nest no:{nest} {color}{' '}
            </h1>
        </>
    );
}

export default Cockou;
