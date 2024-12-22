import React, { useContext } from 'react'; 
import ItemCounter from './ItemCounter';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ producto }) => {
    const { addItem, getUpdatedStock } = useContext(CartContext);  

    
    const handleAddToCart = () => {
        addItem(producto, 1); 
        getUpdatedStock(producto.id, 1);
    };  

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
            <button onClick={handleAddToCart}>Add to Cart</button>
            <ItemCounter 
                stock={producto.stock}
                initial={1} 
                onAdd={onAdd}
            />
        </div>
    )
}

export default ItemDetail