import marijos from '../Reducers/marijos'
import petro from '../Reducers/petro'

function booksReducer(state, action) {
    let newState;
    if (action.type < 300) {
        newState = petro(state, action)
    } else {
        newState = marijos(state, action)
    }


    return newState;
}

export default booksReducer;