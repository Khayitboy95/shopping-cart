import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const BookCard = ({book, onAddToCard ,addedCount }) => {

  const {title, author, price, image } = book;


  const onAdd = () => {
    onAddToCard(book);
  }

  return (
    <Card>
    <Image src={image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>
        <span className='date'>{author}</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='rub' />
        {price}
      </a>
    </Card.Content>
    <Button onClick={onAdd}>Добавить в корзину {addedCount > 0 && `(${addedCount})`}</Button>
  </Card>
  )
}

export default BookCard