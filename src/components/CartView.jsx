// src/components/CartView.jsx
import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { CartContext } from '../context/CartContext';

const CartView = ({ onClose }) => {
    const { cart, getTotalPrice, clear } = useContext(CartContext);

    const showCart = () => {
        const cartItems = cart.map((producto) => (
            `<strong>${producto.name}</strong> - Quantity: ${producto.quantity} - Price: $${producto.price},00`
        )).join('<br/>');

        Swal.fire({
            title: 'Your Cart',
            html: cart.length === 0 ? '<p>Your cart is empty.</p>' : cartItems,
            footer: `<p>Total Price: $${getTotalPrice()},00</p>`,
            showCloseButton: true,
            showCancelButton: true,
            confirmButtonText: 'Proceed to Checkout',
            cancelButtonText: 'Clear Cart',
            onClose: () => {
                onClose(); // Cierra la vista del carrito
            }
        }).then((result) => {
            if (result.isConfirmed) {
                // Aquí puedes llamar a la función para proceder al checkout
                showCheckout();
            } else {
                clear(); // Limpiar el carrito si el usuario cancela
            }
        });
    };

    const showCheckout = () => {
        const checkoutItems = cart.map((producto) => (
            `<strong>${producto.name}</strong> - Quantity: ${producto.quantity} - Price: $${producto.price},00`
        )).join('<br/>');

        Swal.fire({
            title: 'Checkout',
            html: checkoutItems,
            footer: `<p>Total Price: $${getTotalPrice()},00</p>`,
            showCloseButton: true,
            confirmButtonText: 'Confirm Purchase',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Purchase confirmed!', '', 'success');
                clear(); // Limpiar el carrito después de confirmar
                onClose(); // Cerrar la vista del carrito
            }
        });
    };

    return (
        <button onClick={showCart}>View Cart</button> // Trigger the cart view
    );
};

export default CartView;