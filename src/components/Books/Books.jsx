import axios from 'axios';
import React from 'react';
import { CardGroup, Container } from 'semantic-ui-react';
import BookCard from './BookCard';
import FilterContainer from '../Filter/FilterContainer';
import MenuContainer from '../Menu/MenuContainer';

class Books extends React.Component {

    componentDidMount() {
        axios.get('/books.json').then(response => {
            this.props.setBooks(response.data);
        })
    }


    render() {
        return (
          <Container>
            <MenuContainer/>
            <FilterContainer />
            <CardGroup itemsPerRow={4}>
            {!this.props.isLoading
                ? "Loading..."
                : this.props.books.map((book) => (
                    <BookCard addedCount={this.props.addedCount} onAddToCard={this.props.onAddToCard} key={book.id} book={book} />
                  ))}
            </CardGroup>
          </Container>
        );
    }
}


export default Books;