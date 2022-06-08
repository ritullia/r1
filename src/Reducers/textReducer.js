
function textReducer(state, action) {
    let newState;
    switch (action.type) {
        case 'make_new_text':
            newState = action.payload;
            break;
        case 'make_new':
            newState = action.payload;
            break;
        default:
            newState = state;

    }

    return newState;
}

export default textReducer;