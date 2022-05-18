import KvadratoKvadratas from './KvadratoKvadratas';
import Apskritimas from './Apskritimas';

function Kvadratas({ forma, color1, color2 }) {
    return (
        <div className="squar" style={{ backgroundColor: color1 }}>
            {forma === 'k' ? (
                <KvadratoKvadratas color2={color2}></KvadratoKvadratas>
            ) : (
                <Apskritimas color2={color2}></Apskritimas>
            )}
        </div>
    );
}

export default Kvadratas;
