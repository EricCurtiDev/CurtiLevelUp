import React from 'react';
import ItemCounter from './ItemCounter';

const ItemDetail = ({producto}) => {
    const onAdd = (cantidad) =>{
        alert(`You added ${cantidad} products!`)
    }
    return(
        <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
            <h2>Description: {producto.name}</h2>
            <img src={producto.img} alt={producto.name}/>
            <p>{producto.description}</p>
            <p>Stock:{producto.stock}</p>
            <p>${producto.price},00</p>
            <ItemCounter stock={producto.stock} initial={1} onAdd={onAdd}/>
        </div>
    )
}

export default ItemDetail