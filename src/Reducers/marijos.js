import { get_from_server, get_all, get_new_books } from '../Constants/books'

function marijos(state, action) {
    let newState;
    switch (action.type) {
        case get_from_server:
            newState = action.payload.map((b, i) => ({ ...b, row: i, show: true }));
            break;
        case get_all:
            newState = state.map((e) => ({ ...e, show: true }));
            break;
        case get_new_books:
            newState = [];
            break;
        default:
            newState = [...state];
    }
    return newState;
}

export default marijos;