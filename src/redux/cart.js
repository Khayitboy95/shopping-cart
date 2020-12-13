const ADD_BOOK_TO_CART = "ADD_BOOK_TO_CART";
const REMOVE_BOOK_FROM_CART = 'REMOVE_BOOK_FROM_CART';

const initialState = {
    books:[],
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_BOOK_TO_CART:{
            return {...state, books:[...state.books, action.book]}
        }
        case REMOVE_BOOK_FROM_CART:{
            return {...state, books: state.books.filter((elem) => elem.id !== action.id)};
        }
        default:
            return state;
    }
}


export const addBookToCartAC = () => {
    return {
        type: ADD_BOOK_TO_CART
    }
}

export const removeBookFromCartAC = () => {
    return {
      type: REMOVE_BOOK_FROM_CART
    };
  };

export default cartReducer;