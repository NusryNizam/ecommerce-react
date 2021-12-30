import Cart from './Cart'
import logo from '../images/logo.svg'
import close from '../images/icon-close.svg'
import menu from '../images/icon-menu.svg'

const handleMenuClick = () => {
    document.getElementById('navSheet').classList.add('test');
    document.getElementById('navSheetBg').classList.add('test');
    document.querySelector('.navbar ul').classList.add('test');
}

const handleCloseClick = () => {
    document.getElementById('navSheet').classList.remove('test');
    document.getElementById('navSheetBg').classList.remove('test');
    document.querySelector('.navbar ul').classList.remove('test');

}

const Navbar = () => {
    return (
        <nav className="navbar">
            <img id="menu" src={menu} alt="menu" onClick={handleMenuClick}/>
            <img id="logo" src={logo} alt="logo"/>
            <div id="extra"></div>
            <div id="navSheetBg"></div>
            <div id="navSheet">
                <img id="close" src={close} alt="close-btn" onClick={handleCloseClick}/>
            </div>
            <ul className="navlist">
                <li><a href="#">Collections</a></li>
                <li><a href="#">Men</a></li>
                <li><a href="#">Women</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <Cart/>
        </nav>
    )
}

export default Navbar;