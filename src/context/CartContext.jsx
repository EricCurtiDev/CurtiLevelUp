import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]); 

    const addItem = (producto, cantidad) => {
        const existingItem = cart.find(prod => prod.id === producto.id);
        if (existingItem) {
            setCart(cart.map(prod => 
                prod.id === producto.id ? { ...prod, quantity: prod.quantity + cantidad } : prod
            ));
        } else {
            setCart([...cart, { ...producto, quantity: cantidad }]);
        }
    };

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const clear = () => {
        setCart([]);
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const getTotalQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const getUpdatedStock = (id, quantity) => {
        console.log(`Updating stock for product ID: ${id} by quantity: ${quantity}`);
    };


    return (
        <CartContext.Provider value={{ cart, addItem, removeItem,  clear, getTotalPrice, getTotalQuantity, getUpdatedStock }}>
            {children}
        </CartContext.Provider>
    );
};