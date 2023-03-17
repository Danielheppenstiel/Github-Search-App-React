import {GoMarkGithub} from 'react-icons/go';
import NavbarDestop from './NavbarDestop';
import NavbarMobile from './NavbarMobile';

function Navbar() {
  return (
    <>
        <nav>
            <div className="navbar-main-container">
                <div className='logo-display'>
                <GoMarkGithub className='githubIcon' color='white' />
                <h1>DevFinder</h1>
                </div>
                <NavbarDestop className="desktop-nav" />
                <NavbarMobile />
            </div>
        </nav>
    </>
  )
}

export default Navbar