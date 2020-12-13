import React from 'react';
import { Menu } from 'semantic-ui-react';


const MenuContainer = (props) => {
    return (
      <div className="menu-wrapper">
        <Menu>
          <Menu.Item name="editorials">Магазин книг</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item name="reviews">
              Итого :&nbsp;<b>0</b> &nbsp;руб.
            </Menu.Item>
            <Menu.Item name="upcomingEvents">
              Корзина (<b>0</b>)
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
}


export default MenuContainer;