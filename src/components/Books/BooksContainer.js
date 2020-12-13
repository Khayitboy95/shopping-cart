import React from 'react';
import { connect } from 'react-redux';
import { setBooksAC } from '../../redux/books';
import Books from './Books';

const mapStateToProps = (state) => {
    return{
        books:state.booksPage.books,
        isLoading: state.booksPage.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        setBooks:(books) => {
            dispatch(setBooksAC(books));
        }
    }
}

const BooksContainer = connect(mapStateToProps, mapDispatchToProps)(Books);

export default BooksContainer;