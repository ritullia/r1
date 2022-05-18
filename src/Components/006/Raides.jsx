import randomcolor from '../../Functions/randomcolor';

function Raides({ l, i }) {
    return (
        <span
            className="sqcr"
            style={{
                color: randomcolor(),
                backgroundColor: i % 2 ? '#ffff' : 'black',
            }}
        >
            {l}
        </span>
    );
}

export default Raides;
