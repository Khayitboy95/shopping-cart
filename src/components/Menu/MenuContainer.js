import { connect } from 'react-redux';
import { removeBookFromCartAC } from '../../redux/cart';
import MenuComponent from './Menu';
import uniqBy from 'lodash/uniqBy';

const mapStateToProps = (state) => {
    return{
        total: state.cartPage.books.reduce((total, book) => total+=book.price,0),
        books: uniqBy(state.cartPage.books, elem => elem.id),
        count: state.cartPage.books.length
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        removeAddToCard:(book) => {
            dispatch(removeBookFromCartAC(book));
        }
    }
}

const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(MenuComponent);

export default MenuContainer;