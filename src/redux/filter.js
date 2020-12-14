const SET_FILTER = 'SET_FILTER';
const SET_QUERY = 'SET_QUERY';

const initialState = {
    filterBy: 'all',
    searchQuery: ''
}

const filterReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_FILTER:{
            return {...state, filterBy: action.filterBy}
        }
        case SET_QUERY:{
            return {...state, searchQuery: action.query}
        }
        default:
            return state;
    }
}


export const setFilterAC = (filter) => {
    return {
      type: SET_FILTER,
      filterBy: filter
    }
}

export const setSearchQueryAC = (query) => {
    return {
      type: SET_QUERY,
      query
    }
}

export default filterReducer;