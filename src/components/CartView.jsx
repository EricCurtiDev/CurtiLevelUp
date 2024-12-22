import React from 'react';
import CartList from './CartList';

const CartView = ({ onClose }) => {
    return (
        <div>
            <CartList />
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default CartView;


