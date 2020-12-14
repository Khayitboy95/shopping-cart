import React from 'react';
import { Menu, Input } from 'semantic-ui-react';

const Filter = ({filterBy, setFilter, setQuery, searchQuery}) => {
    return (
        <div className="filter_menu">
          <Menu pointing>
            <Menu.Item
              active={filterBy === 'all'}
              onClick={() => {setFilter('all')}}
            >Все</Menu.Item>
            <Menu.Item
              active={filterBy === 'price_high'}
              onClick={() => {setFilter('price_high')}}
            >Цена (дорогие)</Menu.Item>
            <Menu.Item
              active={filterBy === 'price_low'}
              onClick={() => {setFilter('price_low')}}
            >Цена (дешевые)</Menu.Item>
            <Menu.Item
              active={filterBy === 'author'}
              onClick={() => {setFilter('author')}}
            >Автор</Menu.Item>
            <Menu.Item>
                <Input onChange={(e) => setQuery(e.target.value)} value={searchQuery} placeholder="Поиск по книгам..." icon="search" />
            </Menu.Item>
          </Menu>
        </div>
      )
}

export default Filter;