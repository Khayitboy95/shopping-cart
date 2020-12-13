const TOGGLE_IS_LOADING = "TOGGLE_IS_FETCHING";
const SET_BOOK = 'SET_BOOK';

const initialState = {
    books:[],
    isLoading: false
}

const booksReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_BOOK:{
            return {...state, books: action.books, isLoading:true}
        }
        case TOGGLE_IS_LOADING:{
            return { ...state, isLoading: action.isLoading };
        }
        default:
            return state;
    }
}


export const setBooksAC = (books) => {
    return {
        type: SET_BOOK,
        books
    }
}

export const toogleIsLoadungAC = (isLoading) => {
    return {
      type: TOGGLE_IS_LOADING,
      isLoading,
    };
  };

export default booksReducer;