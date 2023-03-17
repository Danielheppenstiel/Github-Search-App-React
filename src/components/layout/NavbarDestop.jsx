import { Link } from 'react-router-dom';

function NavbarDestop() {
  return (
    <div className='navbar-desktop-container'>
        <ul className="nav-links-desktop">
            <li>
                <Link to='/' className='nav-link-desk'>
                    Home
                </Link>
            </li>
            <li>
                <Link to='/about' className='nav-link-desk'>
                    About
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default NavbarDestop