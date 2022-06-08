import rand from '../Functions/rand';
import randColor from '../Functions/randColor';

function numberReducer(state, action) {
    let newState;
    switch (action.type) {
        case 'make_number_arr':
            newState = [...Array(10)].map((_, i) => ({
                number: rand(100, 999),
                color: randColor(),
                show: true,
                row: i
            }));
            break;
        case 'sort_number_arr':
            newState = [...state].sort((a, b) => (b.number - a.number));
            break;
        case 'def_sort_number_arr':
            newState = [...state].sort((a, b) => (a.row - b.row));
            break;
        case 'push_number':
            newState = [...state, { number: rand(100, 999), color: '#000000', show: true }] // state negalima naudoti puch, nes jis tada keičia masyvą
            break;
        case 'filter_list':
            //newState = state.filter((e) => (e.number > 500));
            newState = state.map((e) => (e.number > 500) ? { ...e, show: true } : { ...e, show: false });
            break;
        case 'filter_list_small':
            newState = state.map((e) => (e.number < 400) ? { ...e, show: true } : { ...e, show: false });
            break;
        case 'filter_number':
            newState = state.map((e) => (e.number > action.payload) ? { ...e, show: true } : { ...e, show: false });
            break;
        case 'show_list':
            newState = state.map((e) => ({ ...e, show: true }));
            break;
        default:
            newState = [...state];

    }

    return newState;
}



export default numberReducer;