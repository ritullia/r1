import rand from "../../Functions/rand";


function Vovere() {
     

    return (
        <>
            <div>
                 <div className='vovere'>Vovere Nr.: { 4 * 8 }, { 4 * 5 }</div>
                 <b>Sustorejus vovere</b>
            </div>
            <h3>Voveriu medis Nr.: {rand(100, 999)}</h3>
        </>
    );
     

}

export default Vovere;

// Voverių medis turėtų fandom numerį nuo 100 iki 999 DONE!