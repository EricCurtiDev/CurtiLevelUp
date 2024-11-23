import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Item = ({producto}) => {
    return (
        <div>
            <img src={producto.img} alt={producto.name} />
            <p>{producto.name}</p>
            <p>${producto.price},00</p>
            <Link to={`/item/${producto.id}`} className='btn btn-primary'>See More</Link>
        </div>
    )
}

Item.propTypes = {
    producto: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        stock: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired
    }).isRequired
}

export default Item