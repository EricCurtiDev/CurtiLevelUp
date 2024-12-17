import React, { useContext } from 'react'; 
import ItemCounter from './ItemCounter';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ producto }) => {
    const { addItem, getUpdatedStock } = useContext(CartContext);  // Ensure you are using useContext correctly

    // Get the updated stock for the product
    const stockActual = getUpdatedStock(producto.id, producto.stock);  // Ensure this line is present

    const onAdd = (cantidad) => {
        addItem(producto, cantidad);
        alert(`You added ${cantidad} products!`);
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <h2>Description: {producto.name}</h2>
            <img src={producto.img} alt={producto.name} />
            <p>{producto.description}</p>
            <p>Stock: {producto.stock}</p>
            <p>${producto.price},00</p>
            <ItemCounter 
                stock={producto.stock}
                initial={1} 
                onAdd={onAdd}
            />
        </div>
    )
}

export default ItemDetail