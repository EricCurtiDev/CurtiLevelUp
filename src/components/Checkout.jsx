// src/components/Checkout.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Checkout = ({ onClose }) => {
    const { cart, getTotalPrice, clear } = useContext(CartContext);

    const handleConfirm = () => {
        // Aquí puedes agregar la lógica para procesar el pago o la compra
        alert('Purchase confirmed!');
        clear(); // Limpiar el carrito después de confirmar
        onClose(); // Cerrar el carrito
    };

    return (
        <div className="checkout-view">
            <h2>Checkout</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cart.map((producto) => (
                            <li key={producto.id}>
                                <strong>{producto.name}</strong> - Quantity: {producto.quantity} - Price: ${producto.price},00
                            </li>
                        ))}
                    </ul>
                    <p>Total Price: ${getTotalPrice()},00</p>
                    <button onClick={handleConfirm}>Confirm Purchase</button>
                </div>
            )}
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default Checkout;