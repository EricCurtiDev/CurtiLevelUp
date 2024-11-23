import React from 'react'
import { NavLink } from 'react-router-dom'
import CartWidget from "./CartWidget"
const NavbarComponent = () => {
    
    return(
        <nav className="navContainer">
            <NavLink className="aLink" to='/'>LevelUP Store</NavLink>
            <NavLink className="aLink" to='/category/new products'>New Products</NavLink>
            <NavLink className="aLink" to='/category/sales'>Sales</NavLink>
            <CartWidget counter={0} />
        </nav>
    )
}

export default NavbarComponent