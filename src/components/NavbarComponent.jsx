import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import CartWidget from "./CartWidget"
const NavbarComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <nav className="navContainer">
            <div className='brand'>
                <NavLink className="aLink" to='/'>LevelUP Store</NavLink>
            </div>

            <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                <span className="hamburger"></span>
            </button>
            
            <div className={`nav-menu ${isOpen ? 'show' : ''}`}>
                <NavLink className="aLink" to='/category/new products'>New Products</NavLink>
                <NavLink className="aLink" to='/category/sales'>Sales</NavLink>
                <CartWidget counter={0} />
            </div>
        </nav>
    )
}

export default NavbarComponent