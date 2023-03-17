import { Link } from 'react-router-dom';

function NavbarMobileLinks() {
  return (
    <div className="mobile-nav-links">
        <ul>
            <li>
                <Link to='/'>
                    Home
                </Link>
            </li>
            <li>
                <Link to='/about'>
                    About
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default NavbarMobileLinks