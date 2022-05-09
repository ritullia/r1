import rand from "../../Functions/rand";


function Bebras() {
     

    return (
          
        <>
            {rand(0, 1) ? <i>Bebras</i> : <u>Bebras</u>}
        </>
    
    );
     

}

export default Bebras;