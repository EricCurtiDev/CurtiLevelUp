import PropTypes from 'prop-types'

const CartWidget = ({counter}) => {
    return(
        <div className="cartWidgetContainer">
            <img src="./shopping-cart.png" alt="cart" className="cartIcon"/>
            <p className="cartCounter">{counter}</p>
        </div>
    )
}

CartWidget.propTypes = {
    counter: PropTypes.number.isRequired
}

export default CartWidget