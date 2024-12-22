import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const CartList = () => {
    const { cart, clear, removeItem } = useContext(CartContext); 
    const handleRemove = (id) => {
        removeItem(id); 
    };

    return (
        <div className="cart-list">
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cart.map(item => (
                    <CartItem key={item.id} item={item} onRemove={handleRemove} />
                ))
            )}
            <button onClick={clear}>Clear Cart</button>
            <Link to='/checkout'>Proceed To Checkout</Link>
        </div>
    );
};

export default CartList;