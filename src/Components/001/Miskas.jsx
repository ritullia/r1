import rand from "../../Functions/rand";
import Meska from "./Meska";
import Briedis from "./Briedis";



function Miskas() {
     

    return (
          
        <>
            {rand(0, 1) ? <Meska></Meska> : <Briedis></Briedis>}
        </>
    
    );
     

}

export default Miskas;