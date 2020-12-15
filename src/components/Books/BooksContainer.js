import { connect } from 'react-redux';
import { setBooksAC } from '../../redux/books';
import Books from './Books';
import orderBy from 'lodash/orderBy';
import { addBookToCartAC } from '../../redux/cart';

const sortBy = (books, filterBy) => {
    switch (filterBy) {
        case 'price_high':
            return orderBy(books, 'price', 'desc');
        case 'price_low':
            return orderBy(books, 'price', 'asc');
        case 'author':
            return orderBy(books, 'author', 'asc');
        default:
            return books;
    }
}

    const filterBooks = (books, searchQuery) => {
        return books.filter(elem => elem.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 || elem.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 );
    }

    const searchBooks = (books, filterBy, searchQuery) => {
        return sortBy(filterBooks(books, searchQuery), filterBy);
    }

const mapStateToProps = ({booksPage,filter,cartPage}) => {
    return{
        books:booksPage.books && searchBooks(booksPage.books, filter.filterBy, filter.searchQuery),
        isLoading: booksPage.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setBooks:(books) => {
            dispatch(setBooksAC(books));
        },
        onAddToCard:(book) => {
            dispatch(addBookToCartAC(book));
        }
    }
}

const BooksContainer = connect(mapStateToProps, mapDispatchToProps)(Books);

export default BooksContainer;