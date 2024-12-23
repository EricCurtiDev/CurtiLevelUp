import React from 'react';
import Item from './Item';

const ItemList = ({items}) => {
    return (
        <div className='itemsContainer'>
            {items.map((producto) => (
                <Item key={producto.id} producto={producto} />
            ))}
        </div>
    )
}

export default ItemList