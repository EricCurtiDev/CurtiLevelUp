// src/context/CartContext.jsx
import { createContext, useState } from 'react';

// Crear el contexto del carrito
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]); // Estado para almacenar los productos en el carrito

    // Función para agregar un producto al carrito
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

    // Función para limpiar el carrito
    const clear = () => {
        setCart([]);
    };

    // Función para obtener el precio total
    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    // Nueva función para obtener la cantidad total de productos en el carrito
    const getTotalQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

     // Nueva función para actualizar el stock
    const getUpdatedStock = (id, quantity) => {
        // Aquí puedes implementar la lógica para actualizar el stock
        // Por ejemplo, podrías restar la cantidad del stock actual
        console.log(`Updating stock for product ID: ${id} by quantity: ${quantity}`);
        // Implementa la lógica para actualizar el stock en tu base de datos o estado
    };


    // Proveer el contexto a los componentes hijos
    return (
        <CartContext.Provider value={{ cart, addItem, clear, getTotalPrice, getTotalQuantity, getUpdatedStock }}>
            {children}
        </CartContext.Provider>
    );
};