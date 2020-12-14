import React from 'react';
import { Menu, Popup, List, Button, Image } from 'semantic-ui-react';


const CartComponent = ({ title, id, image, removeAddToCard }) => (
  <List selection divided verticalAlign="middle">
    <List.Item>
      <List.Content floated="right">
        <Button onClick={() => {removeAddToCard(id)}} color="red">
          Удалить
        </Button>
      </List.Content>
      <Image avatar src={image} />
      <List.Content>{title}</List.Content>
    </List.Item>
  </List>
);

const MenuComponent = ({total, count, books, removeAddToCard}) => {
    return (
      <div className="menu-wrapper">
        <Menu>
          <Menu.Item name="editorials">Магазин книг</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item name="reviews">
              Итого :&nbsp;<b>{total}</b> &nbsp;руб.
            </Menu.Item>
            <Popup
              trigger={
                <Menu.Item name="help">
                  Корзина (<b>{count}</b>)
                </Menu.Item>
              }
              content={books && books.map(book => (
                <CartComponent {...book} removeAddToCard={removeAddToCard} />
              ))}
              on="click"
              hideOnScroll
            />
          </Menu.Menu>
        </Menu>
      </div>
    );
}


export default MenuComponent;