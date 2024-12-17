import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Item = ({producto}) => {
    return (
        <div className='itemCard'>
            <img src={producto.img} 
            alt={producto.name} 
            className='itemImage'
            />
            <h3 className='itemName'>{producto.name}</h3>
            <p className='itemPrice'>${producto.price},00</p>
            <Link to={`/item/${producto.id}`} className='seeMoreBtn'>See More</Link>
        </div>
    )
}

Item.propTypes = {
    producto: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.oneOfType([  // Accept both string and number
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        stock: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        img: PropTypes.string.isRequired
    }).isRequired
}

export default Item