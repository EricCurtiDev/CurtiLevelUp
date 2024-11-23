import React, {useState} from 'react'
import PropTypes from 'prop-types'

const ItemCounter = ({stock, initial, onAdd}) => {
    const [count, setCount]= useState(initial)
    
    const sumar = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }

    const restar = () =>{
        if(count > 0 ){
            setCount(count - 1)
        }       
    }

    const onAddHandler = () =>{
        if (stock !== 0){
        onAdd(count)
        }
    }

    return (
        <>
            <div>
                <button className='btn btn-danger' onClick={restar}>-</button>
                <span className='btn'>{count}</span>
                <button className='btn btn-primary' onClick={sumar}>+</button>
            </div>
            <button className='btn btn-primary' onClick={onAddHandler} disabled={count === 0}>Add to cart</button>
        </>
    )
}

ItemCounter.propTypes = {
    stock: PropTypes.number.isRequired,
    initial: PropTypes.number.isRequired,
    onAdd: PropTypes.func.isRequired
}

export default ItemCounter
