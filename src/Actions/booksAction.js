import { sort_by_name, get_default, get_price, get_all, get_new_books, get_from_server } from '../Constants/books'

export function sortByName() {
    return {
        type: sort_by_name
    }
}
export function getDefault() {
    return {
        type: get_default
    }
}
export function getPrice() {
    return {
        type: get_price
    }
}
export function getAll() {
    return {
        type: get_all
    }
}
export function getNewBookAction() {
    return {
        type: get_new_books
    }
}
export function getFromServer(books) {
    return {
        type: get_from_server,
        payload: books
    }
}

// const sortByName = () => {
//     const action = {
//         type: 'sort_by_name',
//     };
//     dispachBooks(action);
// };

// const getDefault = () => {
//     const action = {
//         type: 'get_default',
//     };
//     dispachBooks(action);
// };
// const getPrice = () => {
//     const action = {
//         type: 'get_price',
//     };
//     dispachBooks(action);
// };
// const getAll = () => {
//     const action = {
//         type: 'get_all_books',
//     };
//     dispachBooks(action);
// };
// const getNewBook = () => {
//     const action = {
//         type: 'get_new_books',
//     };
// }
