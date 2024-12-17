// src/components/CartWidget.jsx
import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import CartView from './CartView'; // Asegúrate de que este componente esté importado

const CartWidget = () => {
    const { getTotalQuantity } = useContext(CartContext);
    const [isCartVisible, setCartVisible] = useState(false); // Estado para controlar la visibilidad del carrito

    const toggleCart = () => {
        setCartVisible(!isCartVisible); // Alternar la visibilidad del carrito
    };

    return (
        <div className="cartWidgetContainer">
            <img 
                src="./shopping-cart.png" 
                alt="cart" 
                className="cartIcon" 
                onClick={toggleCart} // Muestra el carrito al hacer clic en la imagen
                style={{ cursor: 'pointer' }} // Cambia el cursor al pasar sobre la imagen
            />
            <p className="cartCounter">{getTotalQuantity()}</p>
            {isCartVisible && <CartView onClose={toggleCart} />} {/* Muestra el carrito si está visible */}
        </div>
    );
};

export default CartWidget;