import { sort_by_name, get_price, get_default } from '../Constants/books'

function petro(state, action) {
    let newState;
    switch (action.type) {
        case sort_by_name:
            newState = [...state].sort((a, b) => {
                if (a.title > b.title) return 1;
                if (a.title < b.title) return -1;
                return 0;
            });
            break;
        case get_default:
            newState = [...state].sort((a, b) => a.row - b.row);
            break;
        case get_price:
            newState = state.map((e) => (e.price > 13.00) ? { ...e, show: true } : { ...e, show: false });
            break;
        default:
            newState = [...state];
    }
    return newState;
}

export default petro;