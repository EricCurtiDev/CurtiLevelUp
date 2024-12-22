import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import CartView from './CartView'; 

const CartWidget = () => {
    const { getTotalQuantity } = useContext(CartContext);
    const [isCartVisible, setCartVisible] = useState(false);

    const toggleCart = () => {
        setCartVisible(!isCartVisible); 
    };

    return (
        <div className="cartWidgetContainer">
            <img 
                src="./shopping-cart.png" 
                alt="cart" 
                className="cartIcon" 
                onClick={toggleCart} 
                style={{ cursor: 'pointer' }} 
            />
            <p className="cartCounter">{getTotalQuantity()}</p>
            {isCartVisible && <CartView onClose={toggleCart} />} {}
        </div>
    );
};

export default CartWidget;