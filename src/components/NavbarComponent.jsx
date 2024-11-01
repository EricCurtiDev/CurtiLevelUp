import CartWidget from "./CartWidget"
const NavbarComponent = () => {
    
    return(
        <nav className="navContainer">
            <a className="aLink">LevelUP Store</a>
            <a className="aLink">News</a>
            <a className="aLink">Contact</a>
            <CartWidget counter={15} />
        </nav>
    )
}

export default NavbarComponent