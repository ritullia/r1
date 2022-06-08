import randColor from '../Functions/randColor'

function colorReducer(state, action) {
    let newState;
    switch (action.type) {
        case 'make_black':
            newState = 'black';
            break;
        case 'make_blue':
            newState = 'blue';
            break;
        case 'make_blue_black':
            newState = state === 'blue' ? 'black' : 'blue'
            break;
        case 'make_rand_color':
            newState = randColor();
            break;
        case 'make_rand_color2':
            newState = action.payload;
            break;
        case 'change_background':
            newState = action.payload;
            break;
        default:
            newState = state;

    }

    return newState;
}

export default colorReducer;