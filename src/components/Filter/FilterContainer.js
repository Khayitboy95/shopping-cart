import { connect } from 'react-redux';
import { setFilterAC, setSearchQueryAC } from '../../redux/filter';
import Filter from './Filter';

const mapStateToProps = (state) => {
    return{
        filterBy: state.filter.filterBy,
        searchQuery: state.filter.searchQuery
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setFilter:(filter) => {
            dispatch(setFilterAC(filter));
        },
        setQuery:(query) => {
            dispatch(setSearchQueryAC(query));
        }
    }
}

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterContainer;