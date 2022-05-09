import rand from "../../Functions/rand";

function Briedis() {

    return (
    <h2 style={
        {
        fontSize: rand(0,1) ? '10px' : '50px'
    }
}>Aš briedis, o kas tu?</h2>
    );

}



export default Briedis;